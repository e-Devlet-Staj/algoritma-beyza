var left = ["A", "B", "C", "D", "E", "F", "G"]
var right = ["H", "I", "J", "K", "L", "M", "N"]

var matrix = [
    [1,  38, 25, 8,  24],
    [41, 23, 9, 34, 22],
    [31, 10, 4, 28, 37],
    [16, 42, 32, 11, 33],
    [35, 5, 18, 39, 2],
    [19, 20, 14, 6, 21],
    [36, 13, 40, 27, 26]
]

// Bir sayının pozisyonunu hızlıca bulabilmemiz için de bir
//   obje tanımlıyoruz.
var position = {}
for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 5; j++) {
        // bu kordinattaki sayıyı bul
        var number = matrix[i][j]
        // position[18] = [4, 2]
        position[number] = [i, j]
    }
}
function findBestPathOf(start, end) {
    // Sol ve sağ taraftaki harfler hangi sırada
    var leftIndex = left.indexOf(start)
    var rightIndex = right.indexOf(end)

    // Giriş ve çıkış sayılarını bul
    var startNum = matrix[leftIndex][0]
    var endNum = matrix[rightIndex][4]

    // Gidilmiş bir yolun ortalamasını bulmak için kullanılır
    function average(arr) {
        var sum = 0.0
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum / arr.length
    }

    // bir sayı için yapılabilecek diğer hamleleri bulalım
    //   daha önce bastığımız yerlere basmamak için bu hamleler
    //   path içinde olmamalı
    function moves(current, path) {
        var legalMoves = []
        var pos = position[current] // [-y, x]
        // console.log(current)
        // console.log(pos)
        // her bir hamle için bakalım
        var left = matrix[pos[0]][pos[1] - 1]
        var right = matrix[pos[0]][pos[1] + 1]
        var up = (matrix[pos[0] - 1] || [])[pos[1]]
        var down = (matrix[pos[0] + 1] || [] )[pos[1]]

        var moveData = [left, right, up, down]
        for (var i = 0; i < 4; i++) {
            var move = moveData[i]
            // eğer hamle tablo dışında kalmıyors (tanımlıysa)
            //   ve path içerisinde de değilse geçerli hamlelere ekle
            if (move !== undefined && path.indexOf(move) === -1) {
                legalMoves.push(move)
            }
        }
        return legalMoves
    }

    // Tüm yolları test edeceğimiz recursive metod
    // current: bu andaki analiz edeceğimiz sayı
    // path: bu ana gelene kadar geçilmiş yollar
    // eğer yolun sonuna ulaşılmışsa tüm yolun ortalamasını alır
    //   path bilgisi ile birlikte döner
    // eğer yolun sonuna ulaşılmamışsa yapılabilecek hamleleri bulur
    //   bu hamlelerin her birisi için recursive olarak kendini çağırır
    function findBestPath(current, path) {
        // yolun sonuna gelmiş miyiz?
        if (current === endNum) {
            //console.log(path)
            return [average(path), path]
        }

        // yolun sonuna gelmediysek yapılabilecek diğer hamleleri bulalım
        var legalMoves = moves(current, path)
        // bu hamleler sona ulaştığında bir average değeri dönecek
        //   bu average değerlerinden en iyisi bizim için en iyi yol demek
        //   şimdilik en iyi değeri epey kötü bir sayıya ayarlayalım
        var best = [999, []]
        for (var i = 0; i < legalMoves.length; i++) {
            var move = legalMoves[i]
            // result = [12.4, [8, 16, 21, 5, 9 ...]] gibi bir değer
            var result = findBestPath(move, path.concat([current]))
            if (best[0] > result[0]) best = result
        }
        return best
    }

    return findBestPath(startNum, [])
}


console.log(findBestPathOf("D", "K"))