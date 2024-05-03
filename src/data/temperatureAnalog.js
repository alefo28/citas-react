import { v4 as uuidv4 } from "uuid";
import moment from 'moment';


const data = [
    ['045f233d-fe05-46b5-84cf-d4b9db5dcfbc', 45, null, null, null, null, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-22 7:33:17', '2024-04-22 7:43:30', 1, 20, '>', 0, null, null],
    ['06f426d8-f94b-438d-8e51-994f65558e2a', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:39:01', '2024-04-22 21:01:34', 0, 5, '<', 0, null, null],
    ['08dd156c-b7e1-4a5c-aab6-2ac36d622209', 95, null, null, null, null, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-22 7:33:27', '2024-04-22 7:44:02', 1, 20, '>', 0, null, null],
    ['0ab794bb-82cb-4095-b232-17901de52c82', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 7:28:50', '2024-04-22 7:43:41', 1, 5, '<', 0, null, null],
    ['0b686e19-6837-43d1-b94d-99044d50e2f1', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:24:01', '2024-04-22 6:32:26', 0, 5, '<', 0, null, null],
    ['0d8218e9-a06f-4133-afb0-a3afb299e6a2', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:36:01', '2024-04-22 21:12:31', 0, 5, '<', 0, null, null],
    ['14ffb7a6-e9c2-4c5f-8bd9-010a5a5f62e7', 60, null, null, null, null, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-22 7:33:20', '2024-04-22 7:43:30', 1, 20, '>', 0, null, null],
    ['2bae85ec-3f11-4a57-976c-d74e22894134', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:25:01', '2024-04-22 6:32:27', 0, 5, '<', 0, null, null],
    ['2e470529-57de-42e5-aa09-11f9c08aa36b', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:34:01', '2024-04-22 21:12:31', 0, 5, '<', 0, null, null],
    ['3233282a-b527-41ed-a635-2c3b760b0d76', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:25:01', '2024-04-22 6:32:27', 0, 5, '<', 0, null, null],
    ['3e89a7f0-e0cf-4b19-a3ab-692b53632da3', 45, null, null, null, null, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-22 7:33:17', '2024-04-22 7:43:30', 1, 20, '>', 0, null, null],
    ['55b9bb80-3832-44e1-9311-4f90f1063fb5', 60, null, null, null, null, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-22 7:33:20', '2024-04-22 7:43:30', 1, 20, '>', 0, null, null],
    ['5a21c6f8-7e7d-4ff4-b943-c1cc4c4f8bc1', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:28:01', '2024-04-22 6:32:28', 0, 5, '<', 0, null, null],
    ['5ef03465-97bc-4b42-8d69-394c0d31b886', 95, null, null, null, null, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-22 7:33:27', '2024-04-22 7:44:02', 1, 20, '>', 0, null, null],
    ['78ef6370-4dc3-4f8f-bdab-64b743e1b254', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:31:01', '2024-04-22 6:32:28', 0, 5, '<', 0, null, null],
    ['797a64a5-4bf4-4cb3-91b8-4a64b48c41cb', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 7:27:50', '2024-04-22 7:43:41', 1, 5, '<', 0, null, null],
    ['7c1b1c12-ea39-4f1d-bd97-df57ee0d47bc', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:32:01', '2024-04-22 6:32:29', 0, 5, '<', 0, null, null],
    ['7db7a623-4996-47e7-8095-fa5b5f3d4a7a', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:29:01', '2024-04-22 6:32:28', 0, 5, '<', 0, null, null],
    ['802a1f7c-d469-4be2-93e9-ef6a8f0f4e5b', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:30:01', '2024-04-22 6:32:28', 0, 5, '<', 0, null, null],
    ['83b9b142-cc8b-4ed2-a90a-4474cf0f70e4', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:33:01', '2024-04-22 21:12:31', 0, 5, '<', 0, null, null],
    ['92dc2b3a-f9bb-4e41-9b67-49a50fc52931', 60, null, null, null, null, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-22 7:33:20', '2024-04-22 7:43:30', 1, 20, '>', 0, null, null],
    ['94d21de3-4db8-47ff-b7f7-2c89a22ad191', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:26:01', '2024-04-22 6:32:27', 0, 5, '<', 0, null, null],
    ['b432b17a-0a1e-41ee-94ff-c7f0b1daa1d4', 45, null, null, null, null, '35af3b6b-a4c6-44d4-b853-c6b91b4373b5', '2024-04-22 7:33:20', '2024-04-22 7:43:30', 1, 20, '>', 0, null, null],
    ['be1b979f-4783-4c59-973a-202d6476670d', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:27:01', '2024-04-22 6:32:28', 0, 5, '<', 0, null, null],
    ['c5f0f996-b194-4cb2-b14c-29646c8d1698', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:25:01', '2024-04-22 6:32:27', 0, 5, '<', 0, null, null],
    ['cfce7f32-013e-4997-afe2-76f126eb7c23', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:24:01', '2024-04-22 6:32:26', 0, 5, '<', 0, null, null],
    ['d9aa5e35-7c28-44ef-9b2f-81ac37d137f4', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 7:29:01', '2024-04-22 7:43:36', 1, 5, '<', 0, null, null],
    ['db7b540f-7c4b-4b6b-9375-4edfc3e13823', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:23:01', '2024-04-22 6:32:25', 0, 5, '<', 0, null, null],
    ['df4b3f1c-7840-4f6e-8c04-04b6a2b87d5c', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:22:01', '2024-04-22 6:32:25', 0, 5, '<', 0, null, null],
    ['e0660df7-7879-40a7-8a3a-5fb522f2e4b4', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:21:01', '2024-04-22 6:32:24', 0, 5, '<', 0, null, null],
    ['e5c3b4f5-ee13-4008-84b1-e00d41ec2c1f', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:20:01', '2024-04-22 6:32:24', 0, 5, '<', 0, null, null],
    ['e78f27b3-36b3-4292-b139-e121b4ddda4d', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:19:01', '2024-04-22 6:32:24', 0, 5, '<', 0, null, null],
    ['ea59e571-30f2-4014-a079-6b72c185a585', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:18:01', '2024-04-22 6:32:23', 0, 5, '<', 0, null, null],
    ['edb6d1ed-095d-44cc-82cf-e148a8d5f1e8', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:17:01', '2024-04-22 6:32:23', 0, 5, '<', 0, null, null],
    ['f43d9927-d9e1-4f79-b6f9-b1b6828ae545', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:7:01', '2024-04-22 6:32:22', 0, 5, '<', 0, null, null],
    ['f8d4475c-4d58-4d29-bb63-4e595b90710e', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:6:01', '2024-04-22 6:32:22', 0, 5, '<', 0, null, null],
    ['fcb9e69c-1c25-4676-9607-ebc8d1d4c12c', 1, '25/05/2024', '19.56 psi', '45 C', '78 metros9', '6e57b3b0-3522-47ae-a23c-3adbfde5f196', '2024-04-22 6:14:01', '2024-04-22 6:32:21', 0, 5, '<', 0, null, null]
];
// Función para generar el arreglo
export default function generateTemperatureAnalogArray() {
    const temperatureAnalog = [];

    /* data.forEach(row => {
        const newRow = {
            id: row[0],
            value: row[1],
            dateService: row[2],
            varOne: row[3],
            varTwo: row[4],
            varThree: row[5],
            plcSlotId: row[6],
            createdAt: row[7],
            updatedAt: row[8],
            first: row[9],
            conditionValue: row[10],
            conditionStart: row[11],
            isChecked: row[12],
            name: row[13],
            message: row[14]
        };

        temperatureAnalog.push(newRow);
    }); */

     // Define la función para generar una fila aleatoria
     function generateRandomRow() {
        // Genera una fecha y hora aleatoria
        const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
        const updatedAt = moment().format('YYYY-MM-DD HH:mm:ss');

        // Genera una fila aleatoria
        const newRow = {
            id: Math.floor(Math.random() * 1000),
            value: Math.random() * 100,
            dateService: new Date().toISOString(),
            varOne: Math.random() > 0.5 ? 'A' : 'B',
            varTwo: Math.floor(Math.random() * 10),
            varThree: Math.random() > 0.5,
            plcSlotId: Math.floor(Math.random() * 100), 
            createdAt: createdAt,
            updatedAt: updatedAt,
            first: Math.random() > 0.5,
            conditionValue: Math.random() * 50,
            conditionStart: new Date().toISOString(),
            isChecked: Math.random() > 0.5,
            name: 'Random Name',
            message: 'Random Message'
        };

        // Agrega la fila generada al array temperatureAnalog
        temperatureAnalog.push(newRow);
    }

    // Llama a la función para generar una fila aleatoria inicialmente
    generateRandomRow();


    return temperatureAnalog;
}



