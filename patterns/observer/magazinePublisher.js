import Subject from './subject';

class MagazinePublisher extends Subject {
  constructor() {
    super();
    this.currentMagazineNumber = 0;
  }

  publishNewMagazineNumber() {
    this.currentMagazineNumber += 1;
    this.notifyObservers(this.currentMagazineNumber);
  }
}

export default MagazinePublisher;
