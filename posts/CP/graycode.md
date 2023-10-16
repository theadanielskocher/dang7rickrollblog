# Gray Code

Nguồn: [CP-ALGORITHMS](https://cp-algorithms.com/algebra/gray-code.html)

## Mở đầu
- Gray Code - Mã nhị phân phản xạ, được biết tới tên là mã Gray, là một **hệ thống ký số nhị phân** trong đó hai giá trị liên tiếp chỉ khác nhau đúng 1 bit.

Ví dụ một dãy Gray-code của các số có 3 bit là: $000, 001, 011, 010, 110, 111, 101, 100$. Vì thế $G(4)=6$.

Mã Gray được phát minh bởi Frank Gray vào năm 1953.

## Tìm mã Gray
Chúng ta hãy nhìn vào các bit của số $n$ và các bit của số $G(n)$. Lưu ý rằng bit thứ $i$ của $G(n)$ bằng $1$ khi và chỉ khi bit thứ $i$ của $n$ bằng $1$ và bit thứ $i+1$ bằng $0$ hoặc ngược lại (bit thứ $i$ bằng $0$ và bit thứ $i+1$ bằng $1$). Vì thế, $G(n)=n\oplus (n>>1)$:
```cpp
int g (int n)
{
    return n ^ (n >> 1);
}
```
## Chiều ngược lại
Cho mã Gray $g$, khôi phục lại số $n$ ban đầu.

Chúng ta sẽ bắt đầu từ những bit quan trọng nhất đến những bit ít quan trọng nhất (bit ít quan trọng nhất có thứ tự là $1$, bit quan trọng nhất có thứ tự là $k$). Mối quan hệ giữa các bit $n_i$ của số $n$ và các bit $g_i$ của số $g$ là:
$n_k = g_k,$

$n_{k-1} = g_{k-1} \oplus n_k = g_k \oplus g_{k-1},$

$n_{k-2} = g_{k-2} \oplus n_{k-1} = g_k \oplus g_{k-1} \oplus g_{k-2},$
 
$n_{k-3} = g_{k-3} \oplus n_{k-2} = g_k \oplus g_{k-1} \oplus g_{k-2} \oplus g_{k-3},$
  
$\ldots$

Cách đơn giản nhất để cài đặt là:
```cpp
int rev_g (int g)
{
    int n = 0;
    for (; g; g >>= 1)
        n ^= g;
    return n;
}
```
## Ứng dụng
Mã Gray có khá nhiều ứng dụng:
- Mã grey của một số $n$ có các bit tạo thành một [chu trình Hamilton](https://www.geeksforgeeks.org/hamiltonian-cycle/) trên một [**siêu khối**](https://en.wikipedia.org/wiki/Hypercube), mỗi bit tương ứng với một chiều;
- Mã grey được sử dụng để làm giảm thiểu lỗi trong chuyển đổi tín hiệu kỹ thuật số sang tín hiệu tương tự (analog) (ví dụ, trong cảm biến).
- Mã grey còn được sử dụng để giải bài toán Tháp Hà Nội nổi tiếng với cộng đồng học thuật. Link tìm hiểu: [Wikipedia](https://en.wikipedia.org/wiki/Tower_of_Hanoi#:~:text=Gray%2Dcode%20solution,-The%20binary%20numeral&text=If%20one%20counts%20in%20Gray,significant%20bit%20is%20the%20largest.);
- Ngoài ra, mã Gray còn được sử dụng trong lý thuyết [giải thuật di truyền - Genetic Algorithm](https://vi.wikipedia.org/wiki/Gi%E1%BA%A3i_thu%E1%BA%ADt_di_truy%E1%BB%81n#:~:text=Gi%E1%BA%A3i%20thu%E1%BA%ADt%20di%20truy%E1%BB%81n%20l%C3%A0,nhi%C3%AAn%2C%20v%C3%A0%20trao%20%C4%91%E1%BB%95i%20ch%C3%A9o.)

## Bài tập vận dụng
- [CSES - Gray Code](https://cses.fi/problemset/task/2205)
- [CSES - Tháp Hà Nội](https://cses.fi/problemset/task/2165)