const teachersAll = [
  {
    teacherImg: './Teacher pics/andrea.jpg',
    teacherName: 'Andrea Thompson',
    teacherExp: 'Software Developer at Microsoft',
    teacherAbout:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsum eius mollitia? Sit, corrupti libero.',
  },
  {
    teacherImg: './Teacher pics/Antoni.jpg',
    teacherName: 'Antoni Gozalas',
    teacherExp: 'Software Developer at Microsoft',
    teacherAbout:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsum eius mollitia? Sit, corrupti libero.',
  },
  {
    teacherImg: './Teacher pics/Edmon.jpg',
    teacherName: 'Edmond Dennis',
    teacherExp: 'Software Developer at Microsoft',
    teacherAbout:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsum eius mollitia? Sit, corrupti libero.',
  },
  {
    teacherImg: './Teacher pics/Ron.jpg',
    teacherName: 'Ron Jimmy',
    teacherExp: 'Software Developer at Microsoft',
    teacherAbout:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsum eius mollitia? Sit, corrupti libero.',
  },
  {
    teacherImg: './Teacher pics/Vanessa.jpg',
    teacherName: 'Vanessa Jack',
    teacherExp: 'Software Developer at Microsoft',
    teacherAbout:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsum eius mollitia? Sit, corrupti libero.',
  },
];

const speakerBio = document.querySelector('.speakers-cards');

teachersAll.forEach((speaker) => {
  const div = document.createElement('div');
  div.innerHTML += `
    <div class="subCard">
    <img src="${speaker.teacherImg}">
    <div>
        <h2>${speaker.teacherName}</h2>
        <h3>${speaker.teacherExp}</h3>
        <p>${speaker.teacherAbout}</p>
    </div>
    </div>
    `;
  speakerBio.append(div);
});
