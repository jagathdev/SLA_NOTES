
class Salary {
    constructor(heroSalary, heroineSalary, comedySalary, villanSalary) {
        this.heroSalary = heroSalary;
        this.heroineSalary = heroineSalary;
        this.comedySalary = comedySalary;
        this.villanSalary = villanSalary;
    }
}

class Music {
    constructor(bgm, song, Salary) {
        this.bgm = bgm;
        this.song = song;
        this.Salary = Salary;
    }
}

class SideActors {
    constructor(comedy, villan, Music) {
        this.comedy = comedy;
        this.villan = villan;
        this.Music = Music;
    }
}

class MainActors {
    constructor(hero, heroine, SideActors) {
        this.hero = hero;
        this.heroine = heroine;
        this.SideActors = SideActors;
    }
}

class Movie {
    constructor(name, budget, MainActors) {
        this.name = name;
        this.budget = budget;
        this.MainActors = MainActors;
    }
}

// Lokesh Movie

const lokSalary1 = new Salary("40cr", "1cr", "10lakh", "5lakh")
const lokMusic1 = new Music("bgm", "Anirudh", lokSalary1)
const loksideActors1 = new SideActors("yogiBabu", "mansurAligan", lokMusic1)
const lokmainActors1 = new MainActors("karthi", "none", loksideActors1)
const lokMovie1 = new Movie("kaithi", "50cr", lokmainActors1)

const lokSalary2 = new Salary("40cr", "1cr", "10lakh", "5lakh")
const lokMusic2 = new Music("bgm", "Anirudh", lokSalary2)
const loksideActors2 = new SideActors("yogiBabu", "mansurAligan", lokMusic2)
const lokmainActors2 = new MainActors("karthi", "none", loksideActors2)
const lokMovie2 = new Movie("kaithi", "50cr", lokmainActors2)

console.log(lokMovie1)
console.log(lokMovie2)

// ShankerMovie
const ShankerSalary1 = new Salary("30cr", "5cr", "15lakh", "8lakh")
const ShankerMusic1 = new Music("velMurugan", "Anirudh", ShankerSalary1)
const ShankersideActors1 = new SideActors("", "mansurAligan", ShankerMusic1)
const ShankermainActors1 = new MainActors("rajini", "ninethara", ShankersideActors1)
const ShankerMovie1 = new Movie("2.0", "500cr", ShankermainActors1)

const ShankerSalary2 = new Salary("30cr", "5cr", "15lakh", "8lakh")
const ShankerMusic2 = new Music("velMurugan", "Anirudh", ShankerSalary2)
const ShankersideActors2 = new SideActors("", "mansurAligan", ShankerMusic2)
const ShankermainActors2 = new MainActors("kamal", "ninethara", ShankersideActors2)
const ShankerMovie2 = new Movie("23.0", "7000cr", ShankermainActors2)

console.log(ShankerMovie1)
console.log(ShankerMovie2)

// Nelson Movie

const NelsonSalary1 = new Salary("30cr", "5cr", "15lakh", "8lakh")
const NelsonMusic1 = new Music("velMurugan", "Anirudh", NelsonSalary1)
const NelsonsideActors1 = new SideActors("", "mansurAligan", NelsonMusic1)
const NelsonmainActors1 = new MainActors("rajini", "ninethara", NelsonsideActors1)
const NelsonMovie1 = new Movie("nelson1", "500cr", NelsonmainActors1)

const NelsonSalary2 = new Salary("30cr", "5cr", "15lakh", "8lakh")
const NelsonMusic2 = new Music("velMurugan", "Anirudh", NelsonSalary2)
const NelsonsideActors2 = new SideActors("", "mansurAligan", NelsonMusic2)
const NelsonmainActors2 = new MainActors("rajini", "ninethara", NelsonsideActors2)
const NelsonMovie2 = new Movie("hii ", "500cr", NelsonmainActors2)

console.log(NelsonMovie1)
console.log(NelsonMovie2)

const movieData = document.getElementById("submit");

movieData.addEventListener("click", (e) => {
    e.preventDefault();

})
