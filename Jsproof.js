// Define a function to create a new NFT with given metadata
function createNFT(moviename,producer, year) {
    // Return an object representing the NFT
    return {
        moviename: moviename,
        producer: producer,
        year: year
    };
}

// Define a function to add an NFT to the collection
function addToCollection(nft, collection) {
    collection.push(nft);
}

// Define a function to print the metadata of NFTs in the collection
function printCollection(collection) {
    console.log("Listing NFTs:");
    console.log("---------------------");
    collection.forEach(nft => {
        console.log("Name: " + nft.moviename);
        console.log("Artist: " + nft.producer);
        console.log("Year: " + nft.year);
        console.log("---------------------");
    });
}

// Define a function to get the total number of NFTs in the collection
function getTotal(collection) {
    return collection.length;
}

// Create an empty array to hold the NFTs
let myNFTs = [];

// Create NFTs and add them to the collection
addToCollection(createNFT("Titanic", "James Cameron",1997 ), myNFTs);
addToCollection(createNFT("Jurassic park", "Steven Spielberg", 1993), myNFTs);
addToCollection(createNFT("Star wars", "Kathleen Kennedy",2015 ), myNFTs);
addToCollection(createNFT("Apollo", "Ron Howard", 1995), myNFTs); // New NFT

// Print the NFTs in the collection
printCollection(myNFTs);

// Print the total number of NFTs
console.log("Total NFTs: " + getTotal(myNFTs));
