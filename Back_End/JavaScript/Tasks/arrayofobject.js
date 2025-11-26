// Directors
// 1. Lokesh Kanagaraj
// 2. S.Shanker
// 3. Nelson

const lokesh = [
    {
        movie: {
            name: "coolie", budget: "50cr", mainActors: {
                hero: "Rajini", heroine: "Pooja Hegde", sideActors: {
                    comedy: "charle", villan: "Nagarjuna", music: {
                        bgm: "Anirudh", song: "Arivu", salary: {
                            hero: "5cr", heroine: "1cr", comedy: "20 lakh", villan: "30 lakh"
                        }
                    }
                }
            }
        }
    },
    {
        movie: {
            name: "Leo", budget: "100cr", mainActors: {
                hero: "Vijay", heroine: "Thisha", sideActors: {
                    comedy: "sandy", villan: "kamal", music: {
                        bgm: "Anirudh", song: "Asal kollar", salary: {
                            hero: "200cr", heroine: "2cr", comedy: "30 lakh", villan: "50 lakh"
                        }
                    }
                }
            }
        }
    },
    {
        movie: {
            name: "Kaithi", budget: "50cr", mainActors: {
                hero: "Karthi", heroine: "none", sideActors: {
                    comedy: "Maryan", villan: "Arjun Das", music: {
                        bgm: "Anirudh", song: "Murugan", salary: {
                            hero: "10cr", heroine: 0, comedy: "10 lakh", villan: "50 lakh"
                        }
                    }
                }
            }
        }
    }

]
const shanker = [
    {
        movie: {
            name: "Indian 2", budget: "80 cr", mainActors: {
                hero: "Kamal", heroine: "Kajal agarval", sideActors: {
                    comedy: "Vivek", villan: "Rishikanth", music: {
                        bgm: "Anirudh", song: "Mani", salary: {
                            hero: "15cr", heroine: "50lakh", comedy: "10 lakh", villan: "70 lakh"
                        }
                    }
                }
            }
        }
    },
    {
        movie: {
            name: 2.0, budget: "200cr", mainActors: {
                hero: "Rajini", heroine: "Amy Jackson", sideActors: {
                    comedy: "Riyaz", villan: "Akshay Kumar", music: {
                        bgm: "G.V Prakash", song: "Muthu Kumar", salary: {
                            hero: "80cr", heroine: "1cr", comedy: "20 lakh", villan: "34 lakh"
                        }
                    }
                }
            }
        }
    },
    {
        movie: {
            name: "I", budget: "160cr", mainActors: {
                hero: "Vikram", heroine: "Ojas Rajani", sideActors: {
                    comedy: "Santhanam", villan: "Upen Patel", music: {
                        bgm: "Anirudh", song: "Murugan", salary: {
                            hero: "3cr", heroine: "2cr", comedy: "20 lakh", villan: "23 lakh"
                        }
                    }
                }
            }
        }
    }
]
const Nelson = [
    {
        movie: {
            name: "Kolamabu Kokila", budget: "70cr",
            mainActors: {
                hero: "Yogi babu", heroine: "Nayanthara",
                sideActors: {
                    comedy: "Rajendran", villan: "Redin Kingsly",
                    music: {
                        bgm: "A.R Raguman", song: "Rani",
                        salary: { hero: "3cr", heroine: "2cr", comedy: "20 lakh", villan: "23 lakh" }
                    }
                }
            }
        }
    },
    {
        movie: {
            name: "Doctor", budget: "200cr",
            mainActors: {
                hero: "Siva Karthikeyan", heroine: "Priyanka Mohan",
                sideActors: {
                    comedy: "Kingsly", villan: "Vinay Rai",
                    music: {
                        bgm: "Anirudh", song: "Thiru",
                        salary: { hero: "20cr", heroine: "2cr", comedy: "50 lakh", villan: "60 lakh" }
                    }
                }
            }
        }
    },

    {
        movie: {
            name: "Beast", budget: "400cr", mainActors: {
                hero: "Vijay", heroine: "Pooja Hegde", sideActors: {
                    comedy: "Kingsly", villan: "Tom Chacko", music: {
                        bgm: "Anirudh", song: "Murugan",
                        salary: { hero: "200cr", heroine: "2cr", comedy: "30 lakh", villan: "50 lakh" }
                    }
                }
            }
        }
    }
];

// const lokeshMovies = lokesh.map((e) => {
//     // console.log(e.movie.name)
//     const movieName = e.movie.name
//     const movieBudget = e.movie.budget
//     const Hero = e.movie.mainActors.hero
//     const Heroine = e.movie.mainActors.heroine
//     const comedy = e.movie.mainActors.sideActors.comedy
//     const villan = e.movie.mainActors.sideActors.villan
//     const musicBgm = e.movie.mainActors.sideActors.music.bgm
//     const song = e.movie.mainActors.sideActors.music.song
//     const heroSalary = e.movie.mainActors.sideActors.music.salary.hero
//     const heroineSalary = e.movie.mainActors.sideActors.music.salary.heroine
//     const codedySalary = e.movie.mainActors.sideActors.music.salary.comedy
//     const villanSalary = e.movie.mainActors.sideActors.music.salary.villan

//     return movieName
// })
// console.log(lokeshMovies)

//     return `Movie Name : ${movieName}`
//     // console.log(movieName)
//     // console.log(movieBudget)
//     // console.log(Hero)
//     // console.log(Heroine)
//     // console.log(comedy)
//     // console.log(villan)
//     // console.log(musicBgm)
//     // console.log(song)
//     // console.log(heroSalary)
//     // console.log(codedySalary)
//     // console.log(villanSalary)
// })

const dirSubmit = document.getElementById("submit")

dirSubmit.addEventListener("click", (e) => {

    e.preventDefault();

    const dir = document.getElementById("Director").value

    const director = [lokesh, shanker, Nelson]

    director[dir].forEach((e) => {

        // console.log(e.movie.mainActors.sideActors.music.salary.hero)
        const movieName = e.movie.name;
        const movieBudget = e.movie.budget;
        const hero = e.movie.mainActors.hero;
        const heroine = e.movie.mainActors.heroine;
        const comedy = e.movie.mainActors.sideActors.comedy;
        const villan = e.movie.mainActors.sideActors.villan;
        const musicBgm = e.movie.mainActors.sideActors.music.bgm;
        const song = e.movie.mainActors.sideActors.music.song;
        const heroSalary = e.movie.mainActors.sideActors.music.salary.hero;
        const heroineSalary = e.movie.mainActors.sideActors.music.salary.heroine;
        const comedySalary = e.movie.mainActors.sideActors.music.salary.comedy;
        const villanSalary = e.movie.mainActors.sideActors.music.salary.villan;

        const movieDetails = document.getElementById("movieDetails")

        movieDetails.innerText += `Movie Name : ${movieName}
        Movie Budget : ${movieBudget}
        Hero : ${hero}
        Heroine : ${heroine}
        Comedian : ${comedy}
        Villan : ${villan}
        BGM : ${musicBgm}
        Song : ${song}
        Hero Salary : ${heroSalary}
        Heroine Salary : ${heroineSalary}
        Comedian Salary : ${comedySalary}
        Villan Salary : ${villanSalary}
        `;
    });

})


