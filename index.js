document.addEventListener("DOMContentLoaded", function() {
    // Array of song objects. Add at least 5 songs with title, artist, and genre properties.
    const songs = [
        { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
        { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
        { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
        { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
        { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
        { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
        { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
        { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
        { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
        { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
        { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
        // Feel free to add even more songs
        { title: "Umbrella", artist: "Rihanna", genre: "R&B" },
        { title: "Blinding Lights", artist: "Abel Tesfaye", genre: "Pop" },
        { title: "Can't Get You Out of My Mind", artist: "Kylie Minogue", genre: "Pop" },
        { title: "Get Lucky", artist: "Daft Punk", genre: "Pop" },
        { title: "Your Song", artist: "Elton John", genre: "R&B" }
    ];

    // Object containing each Guardian's preferred genre
    const guardians = {
        "Star-Lord": "Rock",
        "Gamora": "Pop",
        // Add preferences for Drax, Rocket, and Groot
        "Drax": "R&B",
        "Rocket": "Rock",
        "Groot": "Pop"
    };

    // Function to generate playlist based on preferred genre
    function generatePlaylist(guardians, songs) {
        // Use the map() function to create playlists for each Guardian
         return Object.fromEntries(
            Object.entries(guardians).map(([guardian, genre]) => {
            // Filter songs based on the guardian's preferred genre
            const playlist = songs.filter(song => song.genre === genre);
            // Return an array with the guardian's name as the key
            // and their playlist as the value
            return [guardian, playlist];
            })
        );
    }


    // Call generatePlaylist and display the playlists for each Guardian
    const playlists = generatePlaylist(guardians, songs);

    // Get a reference to the element where you want to append the new div
    const container = document.getElementById("playlists");

    // Display playlists for each Guardian
    for (const guardian in playlists) {
        // Create a new div element
        const newDiv = document.createElement("div");
        // Add the class "playlist" to the new div
        newDiv.classList.add("playlist");

        // Create an h2 element
        const heading = document.createElement("h2");
        heading.textContent = `${guardian}'s Playlist`;

        // Create a list element
        const list = document.createElement("ul");
        list.style.listStyleType = "none";

        // Populate the playlist list with songs
        playlists[guardian].forEach(song => {
            const listItem = document.createElement("li");
            listItem.textContent = `${song.title} by ${song.artist}`;

            // Splitting the song title and artist
            const parts = listItem.textContent.split(" by ");

            // Create a new <span> element for the song title with class "song-title"
            const titleSpan = document.createElement("span");
            titleSpan.textContent = parts[0];
            titleSpan.classList.add("song-title");

            // Create a new <span> element for the artist with class "song-artist"
            const artistSpan = document.createElement("span");
            artistSpan.textContent = parts[1];
            artistSpan.classList.add("song-artist");

            // Append the new <span> elements to the list item
            listItem.innerHTML = ""; // Clear the text content
            listItem.appendChild(titleSpan);
            listItem.appendChild(document.createTextNode(" by ")); // Add text node for "by"
            listItem.appendChild(artistSpan);

            // Append the list item to the list
            list.appendChild(listItem);
        });

        // Append the new div to the container element
        container.appendChild(newDiv);
        newDiv.appendChild(heading);
        newDiv.appendChild(list);
    }
});

    
    
    
    
    
    
    
    
    
    
    
    
    
   /* // Get the div element with the id of "playlists"
    const playlistsDiv = document.getElementById("playlists");

    // Display playlists for each Guardian
    for (const guardian in playlists) {
        // Create a heading element for the Guardian's name
        const heading = document.createElement("h2");
        heading.textContent = `${guardian}'s Playlist`;

        // Create an unordered list element for the playlist
        const playlistList = document.createElement("ul");

        // Populate the playlist list with songs
        playlists[guardian].forEach(song => {
            const listItem = document.createElement("li");
            listItem.textContent = `${song.title} - ${song.artist}`;
            playlistList.appendChild(listItem);
        });

        // Append the heading and playlist list to the playlists div
        playlistsDiv.appendChild(heading);
        playlistsDiv.appendChild(playlistList);
    }
});*/
