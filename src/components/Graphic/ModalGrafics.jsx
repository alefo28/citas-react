import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import generateTemperatureAnalogArray from "../../data/temperatureAnalog";
import html2canvas from "html2canvas";

import "./graphic.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ModalGrafics() {
  const [isOpen, setIsOpen] = useState(false);

  const [select, setSelect] = useState("");

  const [time, setTime] = useState(0);

  const [array, setArray] = useState([]);
  const [labels, setLabels] = useState([]);
  const [dataInfo, setDataInfro] = useState([]);
  const [total, setTotal] = useState(0);
  const [thereData, setThereData] = useState(true)  ;

  useEffect(() => {
    setDataInfro([]);
    setLabels([]);
    filterData(array);
  }, [time]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      
      if (array.length < 1) {
        //TODO: Cambiar para lo que se necesite
        //aqui se llena con los datos de la grafica
        setArray(generateTemperatureAnalogArray());
      }
  
    }, 5000); // 5000 milisegundos = 5 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo);
  }, []); 

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: `Temperatura de ${total} alarmas`,
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Temperatura ",
        data: dataInfo,
        borderColor: "rgb(59, 249, 1)",
        backgroundColor: "rgb(59, 249, 1)",
        yAxisID: "y",
      },
    ],
  };

  function closeModal() {
    setDataInfro([]);
    setLabels([]);
    setIsOpen(false);
  }

  async function openModal() {
    setIsOpen(true);
  }

  //Graphic

  function graph() {
    setTime(parseInt(select));

    if (array.length < 1) {
      //TODO: Cambiar para lo que se necesite
      //aqui se llena con los datos de la grafica
      console.log(generateTemperatureAnalogArray());
      setArray(generateTemperatureAnalogArray());
    }

    // Ordenar el array de fechas de la más antigua a la más reciente
    array.sort((a, b) => {
      // Convertir las fechas a objetos Date
      let fechaA = new Date(a.createdAt).getTime();
      let fechaB = new Date(b.createdAt).getTime();
      // Comparar las fechas y retornar el resultado
      return fechaA - fechaB;
    });
  }

  function filterData(arrays) {
    const filteredData = filterDataByTime(arrays);
    setTotal(filteredData.length);

    const averages = calculateAverage(filteredData);
    setLabels(averages.labels);

    if (filteredData.length === 0) {
      if (time) {
        setThereData(false);
        return;
      }
    }
    setThereData(true);
    setDataInfro(averages.data);
  }

  function filterDataByTime(data) {
    // Obtener la fecha actual
    var fechaActual = new Date();

    // Restar 2 horas a la fecha actual
    var fechaDosHorasAntes = new Date(
      fechaActual.getTime() - time * 60 * 60 * 1000
    );
    // Filtrar el objeto por la propiedad created_at
    var resultadoFiltrado = data.filter(function (item) {
      // Convertir la cadena de fecha en un objeto Date
      var fechaItem = new Date(item.createdAt); // Reemplazar los guiones con barras para evitar problemas en algunos navegadores
      // Verificar si la fecha del elemento es posterior a la fecha dos horas antes
      return fechaItem > fechaDosHorasAntes;
    });

    return resultadoFiltrado;
  }

  function calculateAverage(data) {
    const ahora = new Date();
    const horas = [];
    const dateShow = [];

    let pasoDeTiempo;
    let count;

    switch (time) {
      case 1:
        pasoDeTiempo = 1; // Minuto a minuto
        count = 60;
        break;
      case 2:
        pasoDeTiempo = 5; // Cada 5 minutos
        count = 24;
        break;
      case 8:
        pasoDeTiempo = 30; // Cada 30 minutos
        count = 16;
        break;
      case 12:
        pasoDeTiempo = 60; // Cada hora
        count = 12;
        break;
      case 24:
        pasoDeTiempo = 60; // Cada hora
        count = 24;
        break;
      case 168:
        pasoDeTiempo = 1440; // Cada día
        count = 7;
        break;
      default:
        return horas;
    }
    // Generar las horas o días según el paso de tiempo
    for (let i = 0; i < count; i++) {
      const fecha = new Date(ahora.getTime() - i * pasoDeTiempo * 60000); // 60000 milisegundos = 1 minuto
      horas.push(formatDate(fecha));

      switch (time) {
        case 1:
        case 2:
        case 8:
        case 12:
        case 24:
          dateShow.push(getHourMinuteSecond(fecha));
          break;

        case 168:
          dateShow.push(getDayMonthYear(fecha));
          break;
        default:
          return horas;
      }
    }

    const newData = [];
    horas.forEach((startTime, index) => {
      const startTimeDate = parseDateString(startTime); // Convertir cadena de texto a objeto Date
      const endTime = new Date(
        startTimeDate.getTime() + pasoDeTiempo * 60000
      ).getTime(); // Calcular tiempo final del intervalo

      const valuesWithinInterval = data.filter((item) => {
        const createdAtTime = new Date(item.createdAt).getTime();

        return (
          createdAtTime >= startTimeDate.getTime() && createdAtTime < endTime
        );
      });

      if (valuesWithinInterval.length > 0) {
        const sum = valuesWithinInterval.reduce(
          (total, item) => total + item.value,
          0
        );
        const average = sum / valuesWithinInterval.length;
        newData.push(average);
      } else {
        newData.push(0); // Si no hay valores, el promedio es 0
      }
    });

    return { labels: dateShow.reverse(), data: newData.reverse() };
  }

  //Helpers

  function formatDate(fecha) {
    const horas = String(fecha.getHours()).padStart(2, "0");
    const minutos = String(fecha.getMinutes()).padStart(2, "0");
    const segundos = String(fecha.getSeconds()).padStart(2, "0");
    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Los meses son indexados desde 0
    const año = fecha.getFullYear();

    return `${horas}:${minutos}:${segundos} ${dia}/${mes}/${año}`;
  }
  
  function parseDateString(dateString) {
    const [time, date] = dateString.split(" ");
    const [hours, minutes, seconds] = time.split(":");
    const [day, month, year] = date.split("/");
    return new Date(year, month - 1, day, hours, minutes, seconds);
  }
  function getHourMinuteSecond(fecha) {
    const horas = String(fecha.getHours()).padStart(2, "0");
    const minutos = String(fecha.getMinutes()).padStart(2, "0");
    const segundos = String(fecha.getSeconds()).padStart(2, "0");
    return `${horas}:${minutos}:${segundos}`;
  }
  function getDayMonthYear(fecha) {
    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Los meses son indexados desde 0
    const año = fecha.getFullYear();
    return `${dia}/${mes}/${año}`;
  }

  //funcion para capturar imagen
  function screenshot() {
    const element = document.getElementById("Graphic");
    html2canvas(element).then((canvas) => {
      const screenshot = canvas.toDataURL("image/png");
      download(screenshot); // Aquí puedes hacer lo que quieras con la imagen, como mostrarla en un modal o guardarla en el estado
    });
  }
  function download(imagenData) {
    const enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = imagenData;
    enlaceDescarga.download = `${labels[0]}-${labels[labels.length - 1]}_Graphic.png`;
    // Añade el enlace al documento
    document.body.appendChild(enlaceDescarga);
    // Simula un clic en el enlace para iniciar la descarga
    enlaceDescarga.click();
    // Elimina el enlace del documento
    document.body.removeChild(enlaceDescarga);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="text-red-500 hover:bg-red-100 text-2xl  rounded-md p-1"
      >
        <div className="p-1">boton</div>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className=" fixed inset-0 overflow-y-auto w-full  flex j  items-center">
            <div className="flex  p-4 text-center w-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={` max-w-full max-h-full h-full transform overflow-hidden rounded-2xl bg-white w-full  p-6 text-left align-middle shadow-xl transition-all`}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-center leading-6 text-gray-900 dark:text-yellow-500"
                  >
                    <span></span>
                  </Dialog.Title>
                  <div className=" flex w-full ">
                    <div
                      className=" text-white flex justify-center w-3/4"
                      id="Graphic"
                    >
                      <Line options={options} data={data} />
                      {!thereData && (
                        <div className="texto-superpuesto text-center items-center flex justify-center">
                          No hay alarmas en este intervalo
                        </div>
                      )}
                    </div>

                    <div className="w-1/4  ">
                      <div className=" flex justify-center  mb-2">
                        <select
                          value={select}
                          onChange={(e) => setSelect(e.target.value)}
                          className="rounded-lg p-2 border border-gray-500"
                        >
                          <option value="">--- Selecciones ---</option>
                          <option value="1">Ultima Hora</option>
                          <option value="2">Ultimas 2 Horas</option>
                          <option value="8">Ultimas 8 Horas</option>
                          <option value="12">Ultimas 12 Horas</option>
                          <option value="24">Ultimas 24 dias</option>
                          <option value="168">Ultimos 7 dias</option>
                        </select>

                        <button
                          onClick={() => graph()}
                          className="ml-4 border rounded-lg p-2 text-white bg-black "
                        >
                          Mostrar
                        </button>
                      </div>
                      <div className=" flex justify-center  mb-2">
                        <button
                          type="button"
                          className="ml-4 border rounded-lg p-2 text-white bg-blue-500 "
                          onClick={() => screenshot()}
                        >
                          Screenshot
                        </button>
                      </div>

                      <div className=" flex justify-center  mb-2">
                        <button
                          type="button"
                          className="ml-4 border rounded-lg p-2 text-white bg-gray-500 "
                          onClick={() => setIsOpen(false)}
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
