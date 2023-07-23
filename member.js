function skillsMember() {
  const skills = document.querySelectorAll('.skills__member');
  const skillsContent = document.querySelectorAll('.skills__content');

  function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = 'skills__content skills__close';
    }

    if (itemClass === 'skills__content skills__close') {
      this.parentNode.className = 'skills__content skills__open';
    }
  }

  skills.forEach((el) => {
    el.addEventListener('click', toggleSkills);
  });
}