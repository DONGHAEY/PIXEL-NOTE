export default function boardData() {
    const data = [[],[],[],[],[],[],[],[],[]];

    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            data[i][j] = {
                i,
                j,
                color:'white'
            }
        }
    }
    return data;
}