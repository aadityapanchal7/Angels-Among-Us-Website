export interface types {
  image: string;
  name: string;
  desc: string;
}

export const Teamutil: types[] = [
  {
    image: '/shawn.png',
    name: 'Shawn Sebastian',
    desc: 'Founder & President',
  },
  {
    image: '/rohit.png',
    name: 'Rohit Katuri',
    desc: 'Founder & Co-President',
  },
  {
    image: '/aneesh.jpg',
    name: 'Aneesh Chintala',
    desc: 'Founder & Vice President',
  },
];

export interface BoardMember {
  boardimage: string;
  boardname: string;
  boarddesc: string;
}

export const BoardMembers: BoardMember[] = [
  {
    boardimage: '/saamia.JPG',
    boardname: 'Saamia Sayani',
    boarddesc: 'VP of Outreach',
  },
  {
    boardimage: '/preeti.PNG',
    boardname: 'Preeti Reddy',
    boarddesc: 'VP of Technology',
  },
  {
    boardimage: '/rohan.JPG',
    boardname: 'Rohan Rahman',
    boarddesc: 'VP of Marketing',
  },
  {
    boardimage: '/nysa.jpg',
    boardname: 'Nysa Kharia',
    boarddesc: 'VP of Information',
  },
  {
    boardimage: '/hrishik.jpg',
    boardname: 'Hrishik Gogineni',
    boarddesc: 'VP of Finance',
  },
];
export interface Director {
  dirimage: string;
  dirname: string;
  dirdesc: string;
}

export const Directors: Director[] = [
  {
    dirimage: '/Prahasini.PNG',
    dirname: 'Prahasini Siripurapu' ,
    dirdesc: 'Director of Education',
  },
  {
    dirimage: '/madhav.jpg',
    dirname: 'Madhav Hadagali' ,
    dirdesc: 'Director of Media',
  },
  {
    dirimage: '/litesh.jpeg',
    dirname: 'Litesh Danesh' ,
    dirdesc: 'Director of Logistics',
  },
];
