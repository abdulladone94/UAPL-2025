// export interface Player {
//   id: string;
//   name: string;
// }

// export interface Team {
//   name: string;
//   players: Player[];
// }

// export function generateDummyData(): Team[] {
//   return Array.from({ length: 10 }, (_, i) => {
//     const teamName = `Team ${String.fromCharCode(65 + i)}`;
//     return {
//       name: teamName,
//       players: Array.from({ length: 9 }, (_, j) => ({
//         id: `${teamName}-${j + 1}`,
//         name: `Player ${i * 9 + j + 1}`
//       }))
//     };
//   });
// }
export interface Player {
  id: string;
  name: string;
}

export interface Team {
  name: string;
  players: Player[];
}

export function generateDummyData(): Team[] {
  return [
    {
      name: "Team A",
      players: [
        { id: "A-1", name: "Sajid" },
        { id: "A-2", name: "Nubail" },
        { id: "A-3", name: "Maazin" },
        { id: "A-4", name: "Aamir" },
        { id: "A-5", name: "Ismail" },
        { id: "A-6", name: "Shakir" },
        { id: "A-7", name: "Abdul Malik Fawas" },
        { id: "A-8", name: "Fazlan Rizny" },
        { id: "A-9", name: "Abdulrahman" },
      ],
    },
    {
      name: "Team B",
      players: [
        { id: "B-1", name: "Abdulla" },
        { id: "B-2", name: "Usama" },
        { id: "B-3", name: "Saad" },
        { id: "B-4", name: "Safavi" },
        { id: "B-5", name: "Ibrahim" },
        { id: "B-6", name: "Muaz" },
        { id: "B-7", name: "Ashfac" },
        { id: "B-8", name: "Mohamed Faik" },
      ],
    },
    {
      name: "Team C",
      players: [
        { id: "C-1", name: "Sulaiman" },
        { id: "C-2", name: "Muhammed N" },
        { id: "C-3", name: "Nakeeb" },
        { id: "C-4", name: "Rimsan" },
        { id: "C-5", name: "Ajisal Mukthar" },
        { id: "C-6", name: "Insaaf" },
        { id: "C-7", name: "Abdul Basith Fawas" },
        { id: "C-8", name: "Ifam" },
      ],
    },
    {
      name: "Team D",
      players: [
        { id: "D-1", name: "Safwan" },
        { id: "D-2", name: "Zaif" },
        { id: "D-3", name: "Faheem" },
        { id: "D-4", name: "Fawas Dishty" },
        { id: "D-5", name: "Yousuf Rahman" },
        { id: "D-6", name: "Luqman" },
        { id: "D-7", name: "Ashik" },
        { id: "D-8", name: "Mohamed Hilal" },
      ],
    },
    {
      name: "Team E",
      players: [
        { id: "E-1", name: "Sahd Fouzy" },
        { id: "E-2", name: "Ibrahim Nuhash" },
        { id: "E-3", name: "Marjan" },
        { id: "E-4", name: "Fawzan Muhsin" },
        { id: "E-5", name: "Salman" },
        { id: "E-6", name: "Hamid" },
        { id: "E-7", name: "Athik" },
        { id: "E-8", name: "Hilal Ashraf" },
      ],
    },
    {
      name: "Team F",
      players: [
        { id: "F-1", name: "Munawwer" },
        { id: "F-2", name: "Muhammed Shuaib" },
        { id: "F-3", name: "Zumail" },
        { id: "F-4", name: "Sarfan" },
        { id: "F-5", name: "Riyasath" },
        { id: "F-6", name: "Ayman" },
        { id: "F-7", name: "Zakir Fazeel" },
        { id: "F-8", name: "Ihsan Amzar" },
      ],
    },
    {
      name: "Team G",
      players: [
        { id: "G-1", name: "Arqam Rila" },
        { id: "G-2", name: "AbdurRahaman" },
        { id: "G-3", name: "Ammar" },
        { id: "G-4", name: "Ahmed Fazeel" },
        { id: "G-5", name: "Majid" },
        { id: "G-6", name: "Fazul Rahman" },
        { id: "G-7", name: "Zaweer Fazeel" },
        { id: "G-8", name: "Abdul Rahman Mafhum" },
        { id: "G-9", name: "Aneek Insaf" },
      ],
    },
    {
      name: "Team H",
      players: [
        { id: "H-1", name: "Marsad" },
        { id: "H-2", name: "Shimaz" },
        { id: "H-3", name: "Abdulla Nuhash" },
        { id: "H-4", name: "Imad" },
        { id: "H-5", name: "Amzal" },
        { id: "H-6", name: "Mufallal" },
        { id: "H-7", name: "Umair Ifam" },
        { id: "H-8", name: "Iflal Ashraf" },
      ],
    },
    {
      name: "Team I",
      players: [
        { id: "I-1", name: "Mahir" },
        { id: "I-2", name: "Dasuk" },
        { id: "I-3", name: "Shazan" },
        { id: "I-4", name: "Ahamed Rifdy" },
        { id: "I-5", name: "Farzan Fazil" },
        { id: "I-6", name: "Yehya Fais" },
        { id: "I-7", name: "Abdulrahman Fawas" },
        { id: "I-8", name: "Alqamah" },
      ],
    },
    {
      name: "Team J",
      players: [
        { id: "J-1", name: "Fasir" },
        { id: "J-2", name: "Ismath" },
        { id: "J-3", name: "Younus Faiz" },
        { id: "J-4", name: "Faik" },
        { id: "J-5", name: "Milhan" },
        { id: "J-6", name: "Yousuf Foyuse" },
        { id: "J-7", name: "Amir Amzal" },
        { id: "J-8", name: "Musab Hilal" },
      ],
    },
  ];
}
