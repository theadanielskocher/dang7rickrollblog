# Tổ hợp

Xin chào các bạn. Vì hôm nay chán quá nên mình quyết định sẽ viết blog.

Ở bài viết này mình sẽ viết về một chủ đề liên quan tới toán, nhưng cũng khá liên quan tới tin học, đặc biệt là ở các bài toán liên quan về đếm, đó là "Đại số tổ hợp - Các khái niệm cơ bản".

Dĩ nhiên, ở trong một phạm vi blog thì mình không thể trình bày hết được những gì mà những nhà toán học đã khai phá được về lĩnh vực này dọc suốt chiều dài lịch sử, nên mình chỉ sẽ trình bày những gì quan trọng nhất, những gì cốt lõi nhất của phần này. Hy vọng các bạn cùng đón xem.
## Mục lục
- Quy tắc cộng
- Quy tắc đếm
- Hoán vị, chỉnh hợp, tổ hợp
- Một số bài toán liên quan
- Bài tập tự giải

## Quy tắc cộng
Cho bài toán như sau:
> Nam muốn đi từ Đà Nẵng ra Hà Nội. Có các tuyến sau mà Nam có thể đi trực tiếp từ Đà Nẵng ra Hà Nội:
    - $3$ chuyến tàu hỏa (tất cả chúng đều phân biệt);
    - $2$ chuyến bay.
    Hỏi Nam có bao nhiêu cách chọn để đi từ Đà Nẵng ra Hà Nội?

Dễ dàng thấy rằng Nam có $3+2=5$ cách để chọn một tuyến đi từ Đà Nẵng ra Hà Nội, vì mỗi tuyến đều phân biệt nên Nam chỉ cần chọn ra $1$ tuyến bất kỳ trong số các tuyến trên.

Từ đó, ta rút ra được quy tắc cộng như sau:
> Trong một công việc được hoàn thành bởi hai hành động $X$ hoặc $Y$. Nếu hành động $X$ có $m$ cách thực hiện, hành động $Y$ có $n$ cách thực hiện và **không trùng với bất cứ cách nào của hành động $X$** thì số cách thực hiện công việc đó sẽ là $m+n$.

Ta có thể mở rộng được quy tắc trên thành $k$ hành động: Giả sử một công việc được hoàn thành bởi $K$ hành động $1,2,\ldots,K$, cách thứ $i$ ($1 \leq i \leq K$) có $a_i$ cách thực hiện, tất cả các cách đều không trùng nhau thì số cách thực hiện công việc đó là $\Sigma^K_{i=1}a_i$.

## Quy tắc nhân
Một bài toán được đặt ra như sau:
> Thầy Nhỏ muốn đi từ Hà Nội vào Huế, rồi từ Huế vào Quảng Nam. Biết rằng từ Hà Nội vào Huế có thể đi bằng $3$ cách: ô tô, tàu hỏa, hoặc máy bay. Còn từ Huế vào Quảng Nam có thể đi bằng hai cách: ô tô hoặc tàu hỏa.
> Hỏi thầy Nhỏ có bao nhiêu cách chọn các phương tiện để đi từ Hà Nội vào Quảng Nam?

Để giải bài này thì ta thấy: ta sẽ chia ra hai quy trình riêng biệt:
- Quy trình $1$: Chọn ra phương tiện để đi từ Hà Nội vào Huế;
- Quy trình $2$: Chọn ra phương tiện để đi từ Huế vào Quảng Nam.

Để thực hiện quy trình $1$, ta có $3$ cách thực hiện. Với mỗi cách thực hiện quy trình $1$ thì ta có $2$ cách để thực hiện quy trình $2$. Vậy ta có tổng cộng $3\times2=6$ cách để chọn các phương tiện để đi từ Hà Nội vào Quảng Nam.

Đối với dạng này, ta thấy rằng cứ mỗi cách thực hiện của quy trình trước thì ta có nhiều cách thực hiện để thực hiện quy trình sau. Từ đó, ta rút ra được quy tắc nhân như sau:
> Giả sử một công việc phải hoàn thành qua hai công đoạn liên tiếp nhau:
> - Công đoạn $1$ có $m$ cách thực hiện;
> - Với mỗi cách thực hiện công đoạn $1$ có $n$ cách thực hiện công đoạn $2$;
> 
> Khi đó số cách thực hiện công việc là $m\times n$.

Bạn có thể dễ dàng mở rộng quy tắc nhân với những trường hợp khác, phần này mình xin nhường lại cho bạn đọc.

## Hoán vị
Cho bài toán ví dụ như sau: Có $n$ chiếc ghế và có $n$ học sinh. Mỗi chiếc ghế sẽ được ngồi bởi $1$ học sinh. Hỏi có bao nhiêu cách sắp xếp $n$ học sinh vào $n$ chiếc ghế?

Ta giải như sau:
- Với chiếc thứ $1$ thì có $n$ cách xếp $1$ học sinh;
- Chiếc ghế thứ $2$ có $n-1$ cách xếp (vì đã có một học sinh ngồi vào chiếc ghế thứ nhất);
- Chiếc ghế thứ $3$ có $n-2$ cách xếp;
- ...
- Chiếc ghế thứ $n$ có $1$ cách xếp.

Vậy theo quy tắc nhân, số cách xếp là $n\times (n-1) \times \ldots \times 1=n!$, đây được gọi là **$n$ giai thừa**.

Cài đặt:
```cpp
int f (int n)
{
    if (n == 0) return 1;
    else return n * f (n - 1);
}
```
## Chỉnh hợp
Một khái niệm gần giống với hoán vị đó chính là **chỉnh hợp**. Chỉnh hợp có $2$ loại:
- Chỉnh hợp lặp;
- Chỉnh hợp không lặp.

### Chỉnh hợp lặp
Một bài toán liên quan đến chỉnh hợp lặp được phát biểu như sau:
> Cho $4$ chữ số $1$, $2$, $3$, $4$. Hỏi lập được bao nhiêu số có $4$ chữ số?

Ta thấy rằng, số có $4$ chữ số sẽ có dạng $\overline{abcd}$, trong đó:
- Có $4$ cách chọn $4$ chữ số cho chữ số $a$;
- Có $4$ cách chọn $4$ chữ số cho chữ số $b$;
- Có $4$ cách chọn $4$ chữ số cho chữ số $c$;
- Có $4$ cách chọn $4$ chữ số cho chữ số $d$.

Vậy theo quy tắc nhân, số lượng số có $4$ chữ số là $4\times 4\times 4 \times 4=256$ số.

Từ đó, ta có khái niệm và công thức của chỉnh hợp lặp:
- Cho một tập hợp $X$ gồm $n$ phần tử ($n$ là số nguyên dương). Một dãy có độ dài $m$ ($m \leq n$) các phần tử của $X$, trong đó mỗi phần tử có thể lặp lại nhiều lần, sắp xếp theo thư tự nhất định gọi là chỉnh hợp lặp chập $m$ của $n$ phần tử. Kí hiểu của chỉnh hợp lặp chập $m$ của $n$ là $F_n^m$.
- Công thức: $F_n^m=n^m$.

#### Cài đặt
Ta dùng lũy thừa nhị phân để tính $n^m$ trong $\Theta(\log (m))$.
```cpp
long long binpow (long long n, long long m) {
    long long res = 1;
    while (m > 0) {
        if (m & 1)
            res = res * n;
        n = n * n;
        m >>= 1;
    }
    return res;
}
```
### Chỉnh hợp không lặp
Ta xét bài toán như sau: Cho $8$ chữ số từ $1$ đến $8$, hãy đếm xem có bao nhiêu số nguyên dương có $4$ chữ số, và các chữ số của chúng đôi một khác nhau.

Ta giải quyết tương tự với bài toán ở trên:
- Chữ số $a$ có $8$ cách chọn;
- Chữ số $b$ có $7$ cách chọn (bỏ đi một chữ số đã được chọn cho chữ số $a$);
- Chữ số $c$ có $6$ cách chọn;
- Chữ số $d$ có $5$ cách chọn.

Vậy theo quy tắc nhân, số lượng số thỏa mãn là $8\times 7\times 6\times 5=1680$.

Ta thấy rằng: chỉnh hợp không lặp cũng khá giống với hoán vị, nhưng đối với chỉnh hợp không lặp thì ta chỉ thấy ra $m$ phần tử trong một tập $n$ phần tử rồi sắp xếp chúng lại với nhau, từ đó ta có định nghĩa & công thức của chỉnh hợp không lặp:
- Cho tập hợp $X$ gồm $n$ phần tử ($n$ là số nguyên dương). Một dãy có độ dài $m$ ($m \leq n$) phần tử của $X$, trong đó mỗi phần tử đều khác với các phần tử còn lại, sắp xếp chúng theo một trật tự nhất định gọi là **chỉnh hợp không lặp** chập $m$ của $n$. Ký hiệu chỉnh hợp không lặp chập $m$ của $n$ là $A^m_n$.
- Công thức: $A_n^m=\frac{n!}{(n-m)!}$.

#### Cài đặt
```cpp
int A (int n, int m) // chỉnh hợp không lặp chập m của n
{
    return f(n)/f(n-m); // f là hàm tính giai thừa
}
```

## Tổ hợp
- Định nghĩa: Tổ hợp chập $k$ của $n$ là một cách chọn ra $k$ phần tử từ một tập hợp $n$ phần tử và không phân biệt thứ tự, ký hiệu là $C^k_n$.
- Công thức: $C^k_n=\frac{n!}{k!\times (n-k)!}=\frac1{k!}\times A_n^m$.

Ta thấy rằng tổ hợp nó cũng liên hệ một phần với chỉnh hợp.

Một bài toán ví dụ như sau: Một lớp học có $35$ học sinh, cô giáo muốn chọn ra $8$ học sinh bất kỳ để tham dự Đại hội Đoàn trường. Hỏi cô giáo có bao nhiêu cách chọn thỏa mãn?

Đáp án là $\frac{35!}{8!\times 27!}=23535820$ (cách).

## Một số bài toán liên quan

Ta thấy được rằng, những kết quả của các phép chỉnh hợp, tổ hợp, hoán vị có thể cực kỳ lớn (vượt quá giới hạn $10^{18}$), cho nên các bài toán trong Tin học liên quan tới các khái niệm này thường yêu cầu in ra kết quả sau khi modulo (chia lấy dư) cho một hằng số nào đó, ví dụ như $10^9+7$, $998244353$, ...

Ta sẽ tới với một số bài toán như sau:
### Bài toán 1
Cho một dãy số nguyên $a_1,a_2,\ldots,a_n$. Đếm số lượng cặp chỉ số $(i,j)$ với $1 \leq i < j \leq n$ sao cho $a_i\times a_j$ là một số nguyên dương.

Giới hạn: $n \leq 10^5$, $a_i \leq 10^9$, $50\%$ số test có $n \leq 10^3$.

#### Lời giải
##### Cày trâu:
For 2 vòng rồi đếm số cặp chỉ số thỏa mãn. Độ phức tạp $\Theta(n^2)$.

```cpp
for (int i = 1; i <= n - 1; i++)
{
    for (int j = i + 1; j <= n; j++)
    {
        if (a[i] * a[j] > 0) res++;
    }
}
return res;
```
##### Full
Ta có tính chất:
- dương $\times$ dương $=$ dương;
- âm $\times$ âm $=$ dương.

Vậy ta có thể đếm số lượng số dương, số lượng số âm, sau đó áp dụng quy tắc cộng & quy tắc nhân là hoàn thành bài toán.

```cpp
int posNum = 0;
int negNum = 0;
for (int i = 1; i <= n; i++)
{
    int x;
    cin >> x;
    if (x > 0) posNum++;
    else if (x < 0) negNum++;
}
return posNum * (posNum - 1) / 2 + negNum * (negNum - 1) / 2;
```
Độ phức tạp là $\Theta(n)$.

### Bài toán 2
Cho một dãy số nguyên dương $a_1,a_2,\ldots,a_n$. Đếm số lượng bộ $k$ chỉ số $(i_1,i_2,\ldots,i_k)$ với $1 \leq i_1 < i_2 < \ldots < i_k \leq n$ thỏa mãn $a_{i_1}\times a_{i_2}\times \ldots \times a_{i_k}=1$.

#### Lời giải
Nhận thấy rằng tích trên bằng $1$ khi tất cả các phần tử đều bằng $1$. Đếm số lượng số $1$ sau đó áp dụng công thức tổ hợp là hoàn thành bài toán.

## Bài tập tự giải
- [LQDOJ - Số hoán vị](https://lqdoj.edu.vn/problem/strperm);
- [VNOJ - Bộ bài hai mặt](https://oj.vnoi.info/problem/twoside);
- [Codeforces - 1823A](https://codeforces.com/problemset/problem/1823/A);

Ngoài ra bạn có cũng thế lọc các bài theo tag `tổ hợp (combinatorics)` để tìm thêm các bài tập.