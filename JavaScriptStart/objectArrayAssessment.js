const apiData = {
    fruits: [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig",
        "Grape",
        "Honeydew",
        "Indian Fig",
        "Jackfruit",
        {
            favoriteArtist: "Taylor Swift",
            favoriteSong: "Love Story",
        },
    ],
    user: {
        name: "John Doe",
        email: "john.doe@example.com",
        age: 30,
        preferences: {
            color: "Blue",
            genre: "Pop",
            isActive: true,
        },
        playlists: [
            {
                name: "Chill Vibes",
                songs: [
                    {
                        title: "Ocean Eyes",
                        artist: "Billie Eilish",
                        duration: 3.2,
                        isFavorite: true,
                    },
                    {
                        title: "Shape of You",
                        artist: "Ed Sheeran",
                        duration: 4.24,
                        isFavorite: false,
                    },
                ],
            },
            {
                name: "Workout Mix",
                songs: [
                    {
                        title: "Eye of the Tiger",
                        artist: "Survivor",
                        duration: 4.04,
                        isFavorite: true,
                    },
                    {
                        title: "Lose Yourself",
                        artist: "Eminem",
                        duration: 5.2,
                        isFavorite: false,
                    },
                ],
            },
        ],
    },
};

const lastFruit = apiData.fruits[apiData.fruits.length - 2]

console.log(1, lastFruit);

const favoriteArtist = apiData.fruits[apiData.fruits.length - 1].favoriteArtist

console.log(2, favoriteArtist);

const favoriteSong = apiData.fruits[apiData.fruits.length - 1].favoriteSong

console.log(3, favoriteSong);

const userName = apiData.user.name

console.log(4, userName);

const userEmail = apiData.user.email
console.log(5, userEmail);

const age = apiData.user.age
console.log(6, age);

const favColor = apiData.user.preferences.color
console.log(7, favColor);

const isActive = apiData.user.preferences.isActive
console.log(8, isActive);

const chillVibes = apiData.user.playlists[0].songs[0].duration
console.log(9, chillVibes);

const secondSongFav = apiData.user.playlists[0].songs[1].isFavorite
console.log(10, secondSongFav);

const secondSongName = apiData.user.playlists[1].name
console.log(11, secondSongName);

const songTitle = apiData.user.playlists[1].songs[1].title
console.log(12, songTitle);