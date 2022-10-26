const teachersAll = [
  {
    teacherImg: './Teacher pics/andrea.jpg',
    teacherName: 'Andrea Thompson',
    teacherExp: 'Software Developer at Microsoft',
    teacherAbout: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    teacherImg: './Teacher pics/Antoni.jpg',
    teacherName: 'Antoni Gozalas',
    teacherExp: 'Software Developer at Microsoft',
    teacherAbout: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    teacherImg: './Teacher pics/Edmon.jpg',
    teacherName: 'Edmond Dennis',
    teacherExp: 'Software Developer at Microsoft',
    teacherAbout: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const speakerBio = document.querySelector('.speakers-cards1');

teachersAll.forEach((speaker) => {
  const div = document.createElement('div');
  div.className = 'div-card';
  div.innerHTML += `
    <div class='subCard'>
    <img class='teachImg' src="${speaker.teacherImg}">
    <div class='speaker-desc'>
        <h2 class='speakh2'>${speaker.teacherName}</h2>
        <h3 class='speakh3'>${speaker.teacherExp}</h3>
        <p class='speakp'>${speaker.teacherAbout}</p>
    </div>
    </div>
    `;
  speakerBio.append(div);
});

const teachersAll1 = [
  {
    teacherImg: './Teacher pics/Ron.jpg',
    teacherName: 'Ron Jimmy',
    teacherExp: 'Software Developer at Microsoft',
    teacherAbout: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    teacherImg: './Teacher pics/Vanessa.jpg',
    teacherName: 'Vanessa Jack',
    teacherExp: 'Software Developer at Microsoft',
    teacherAbout: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    teacherImg: './Teacher pics/Yan.jpg',
    teacherName: 'Yan simmond',
    teacherExp: 'Software Developer at Microsoft',
    teacherAbout: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const speakerBio1 = document.querySelector('.speakers-cards2');

teachersAll1.forEach((speaker1) => {
  const div1 = document.createElement('div');
  div1.className = 'div-card1';
  div1.innerHTML += `
    <div class='subCard'>
    <img class='teachImg' src="${speaker1.teacherImg}">
    <div class='speaker-desc'>
        <h2 class='speakh2'>${speaker1.teacherName}</h2>
        <h3 class='speakh3'>${speaker1.teacherExp}</h3>
        <p class='speakp'>${speaker1.teacherAbout}</p>
    </div>
    </div>
    `;
  speakerBio1.append(div1);
});
