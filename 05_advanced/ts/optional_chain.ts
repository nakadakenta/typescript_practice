interface DownloadedData  {
    id: number;
    name: string;
    age?: number;
}

const downloadedData: DownloadedData = {
    id: 1,
    name: 'Alice'
};

// Optional chaining
console.log(downloadedData.age?.toString());

// Nullish coalescing operator
// const userName = downloadedData.age ?? 'no-user';
// console.log(userName.toString());
