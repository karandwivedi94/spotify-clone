const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Bella Ciao",
      artist: "El Profesor",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fbellaciao.mp3?alt=media&token=e1dd8233-3521-4574-8957-d51af9a5db5c",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fmoneyheist.jpg?alt=media&token=32baf3d7-0ab5-47d5-ba48-554792cea117",
    },
    {
      id: 2,
      favourite: false,
      songName: "Beast",
      artist: "Anirudh Ravichander",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fbeast.mp3?alt=media&token=ebf29a01-079b-44eb-969a-57ee66a15ee8",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fbeast.jpg?alt=media&token=7cc7c33e-8eac-4f7a-858d-75e75d4b609c",
    },
    {
      id: 3,
      favourite: false,
      songName: "Joker - Rock and Roll",
      artist: "Hildur Guðnadóttir",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fjoker.mp3?alt=media&token=9e79751a-726d-4359-8a26-116db925f6ff",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fjoker.jpg?alt=media&token=c3955b3c-7efd-4127-b119-6c6343dbc414",
    },
    {
      id: 4,
      favourite: false,
      songName: "I Am A Peaky Blinder",
      artist: "Otnicka",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fpeaky-blinder.mp3?alt=media&token=2ddb5cfb-f4e0-4604-b77c-a7f63894d3ec",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fpeakyblinder.jpg?alt=media&token=b83fbf86-37ef-47c2-948e-3447a22a2d07",
    },
    {
      id: 5,
      favourite: false,
      songName: "Naanga Vera Maari",
      artist: "Yuvan Shankar Raja",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fvalimai.mp3?alt=media&token=97c769ab-e2fb-4562-90aa-18c73b320bde",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fvalimai.jpg?alt=media&token=e11b839d-2514-4e1a-aa3a-20db3540a837",
    },
    {
      id: 6,
      songName: "Your Woman",
      artist: "White Town",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FWhite-Town-Your-Women.mp3?alt=media&token=91817445-98ba-4a99-a4b4-6218f2742eb3",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fwhitetown.jpg?alt=media&token=25e1ec0c-24ec-4a11-a7a7-e55ec1fc50cf",
    },
    {
      id: 7,
      favourite: false,
      songName: "Charlie",
      artist: "Gopi Sundar",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FCharlie.mp3?alt=media&token=5a129114-bb31-4a5a-95b7-1767829df21e",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fcharlie.jpg?alt=media&token=81a1dc08-a9af-4db2-b74d-1f50315f9342",
    },
    {
      id: 8,
      favourite: false,
      songName: "Mask Off",
      artist: "Future",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FFuture-Mask-Off.mp3?alt=media&token=92d8b60f-2bca-406f-914a-40bfb9a9324a",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fmask.jpg?alt=media&token=22f0d7be-74b8-4c0d-849d-b777370e9559",
    },
    {
      id: 9,
      favourite: false,
      songName: "Hey Mama",
      artist: "David Guetta",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FHeyMamaRingtone.mp3?alt=media&token=850148f5-8a15-4f87-995d-711138d5d7a0",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fheymama.jpg?alt=media&token=2d8e8632-8051-4105-9760-3c715d797802",
    },
    {
      id: 10,
      favourite: false,
      songName: "Turkish Folk Battle Song",
      artist: "CVR Toon ",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FPlevne-turkish.mp3?alt=media&token=72f7e03b-2865-4ffb-a2d1-da4c4557fb80",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fturkish.jpg?alt=media&token=1f44ad17-43a8-4e1d-b232-a78b28cb9fe0",
    },

    {
        id: 11,
        favourite: false,
        songName: "6AM Mimosa",
        artist: " DJ Boring ",
        song: "https://drive.google.com/file/d/1GRhsFZLIzhkoXMzA6zwKXnn3mRjHxhai/view?usp=sharing",
        imgSrc:
          "data:image/jpeg;base64,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",
      },
  ];
  
  export { Songs };