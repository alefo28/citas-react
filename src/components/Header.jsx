import ModalGrafics from "./Graphic/ModalGrafics";

function Header() {
  return (
    <>
      <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
        Seguimiento PacientesABC{""}
        <span className=" text-indigo-600"> Veterinarias</span>
      </h1>
      <ModalGrafics />
    </>
  );
}

export default Header;
