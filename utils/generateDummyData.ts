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
      name: "Galle Marvels",
      players: [
        { id: "A-1", name: "Sajid Hassan" },
        { id: "A-2", name: "AbdurRahman Safavi" },
        { id: "A-3", name: "Fasir Usman" },
        { id: "A-4", name: "Riyasath" },
        { id: "A-5", name: "Fayas Moulavi" },
        { id: "A-6", name: "Yousuf Rahman" },
        { id: "A-7", name: "Majid Mukram" },
        { id: "A-8", name: "Abdul Basith Fawas" },
        { id: "A-9", name: "Iflal Ashraf" },
        { id: "A-10", name: "Kafi" },
      ],
    },
    {
      name: "Victory Vibes",
      players: [
        { id: "B-1", name: "Nubail Ziyaard" },
        { id: "B-2", name: "Abdulla Firdhouse" },
        { id: "B-3", name: "Saad Bishry" },
        { id: "B-4", name: "Musthafa Safavi" },
        { id: "B-5", name: "Maazin Faheem" },
        { id: "B-6", name: "Fazlan Rizny" },
        { id: "B-7", name: "Shuaib Fuyuse" },
        { id: "B-8", name: "Mohamed Faik" },
        { id: "B-9", name: "Raza Hussain" },
        { id: "B-10", name: "Sabry Yousuf" },
      ],
    },
    {
      name: "Golden Roots",
      players: [
        { id: "C-1", name: "Sulaiman Nuhash" },
        { id: "C-2", name: "Nakeeb Zarook" },
        { id: "C-3", name: "Muhammed Nuhash" },
        { id: "C-4", name: "Ahamed Rifdy" },
        { id: "C-5", name: "Alqamah Safavy" },
        { id: "C-6", name: "Younus Faiz" },
        { id: "C-7", name: "Insaaf" },
        { id: "C-8", name: "Abdul Rahman Mafhum" },
        { id: "C-9", name: "Shafy" },
        { id: "C-10", name: "Aslam" },
      ],
    },
    {
      name: "Dream Chaser",
      players: [
        { id: "D-1", name: "Munawwer Ziyard" },
        { id: "D-2", name: "Zaif Zain" },
        { id: "D-3", name: "Marjan Mukram" },
        { id: "D-4", name: "Fawas Dishty" },
        { id: "D-5", name: "Aamir Safavi" },
        { id: "D-6", name: "Ibrahim Muhammed" },
        { id: "D-7", name: "Abdulla Shifai" },
        { id: "D-8", name: "Milhan Fazeel" },
        { id: "D-9", name: "Shakil Rizwan" },
        { id: "D-10", name: "Muhammed Firdhouse" },
      ],
    },
    {
      name: "Infinity Bonds",
      players: [
        { id: "E-1", name: "Sahd Fouzy" },
        { id: "E-2", name: "Zumail Jasool" },
        { id: "E-3", name: "Shimaz Rizwan" },
        { id: "E-4", name: "Sarfan Yousuf" },
        { id: "E-5", name: "Imad Ruzain" },
        { id: "E-6", name: "Ajisal Mukthar" },
        { id: "E-7", name: "Abdulrahman Fawas" },
        { id: "E-8", name: "Hamid Fazul Rahman" },
        { id: "E-9", name: "Abdulrahman" },
        { id: "E-10", name: "Zaid" },
      ],
    },
    {
      name: "Legacy Legends",
      players: [
        { id: "F-1", name: "Marsad Mukram" },
        { id: "F-2", name: "Usama Aslam" },
        { id: "F-3", name: "Abdulla Nuhash" },
        { id: "F-4", name: "Fawzan Muhsin" },
        { id: "F-5", name: "Mufallal Ziyaard" },
        { id: "F-6", name: "Ayman Shukoor" },
        { id: "F-7", name: "Hilal Ashraf" },
        { id: "F-8", name: "Mohideen Mulaffar" },
        { id: "F-9", name: "Ihsan Amzer" },
        { id: "F-10", name: "Sulaim" },
      ],
    },
    {
      name: "Family titans",
      players: [
        { id: "G-1", name: "Mahir Mukram" },
        { id: "G-2", name: "Safwan Yousuf" },
        { id: "G-3", name: "Ismath Muhammeed" },
        { id: "G-4", name: "Rimsan" },
        { id: "G-5", name: "Dasuki FailurRahaman" },
        { id: "G-6", name: "Amzal Muktahr" },
        { id: "G-7", name: "Salman Sarfan" },
        { id: "G-8", name: "Umair Ifham" },
        { id: "G-9", name: "Amir Amzal" },
        { id: "G-10", name: "Thalha" },
      ],
    },
    {
      name: "Unity Strikers",
      players: [
        { id: "H-1", name: "Arqam Rila" },
        { id: "H-2", name: "Muhammed Shuaib" },
        { id: "H-3", name: "Ahamed Fazeel" },
        { id: "H-4", name: "Shazan Rizwan" },
        { id: "H-5", name: "Faik Hussain" },
        { id: "H-6", name: "Fazul Rahman" },
        { id: "H-7", name: "Ammar Firdhouse" },
        { id: "H-8", name: "Ayyoob" },
        { id: "H-9", name: "Luqman Sabry" },
        { id: "H-10", name: "Faheem Nilamdeen" },
      ],
    },
  ];
}
