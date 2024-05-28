# Hướng dẫn sử dụng package viết đề thi trong $\LaTeX$
---

Xin chào các bạn đã đến với blog tiếp theo của mình.

Thi cử cũng xong xuôi cả rồi nên mình cũng muốn chia sẻ một số thứ mà mình đang cook trong thời gian này.

## Mở đầu
- $\LaTeX$ hiện đang vô cùng thông dụng. $\LaTeX$ là công cụ tốt nhất để viết các tài liệu mang thiên hướng khoa học và kỹ thuật, và dần dà đang thay thế cho `Microsoft Word`. Cá nhân mình cũng đang dần dần thay thế `Microsoft Word` bằng $\LaTeX$.
- Các đề thi Tin học cũng dần dần được viết bằng $\LaTeX$ (minh chứng là đề thi HSGQG 2 năm nay đều sử dụng $\LaTeX$).
- Nhằm giúp các bạn thuận tiện hơn trong việc sử dụng $\LaTeX$ để soạn đề thi Tin học, mình xin giới thiệu một con package dùng để viết đề thi tin học do mình tự nấu. Và tất nhiên, nó sẽ không professional như của [Polygon](https://polygon.codeforces.com/), nhưng mà nó vẫn đủ xài và rất dễ hiểu.

Các bạn cùng đón xem tiếp nhé :)

## Tại sao nên dùng $\LaTeX$

Một topic rất hay trên StackExchange nói về điều này ở đây: [Why should I use LaTeX?](https://tex.stackexchange.com/questions/1756/why-should-i-use-latex). Ở đây họ đã cho biết những ưu điểm và nhược điểm khi sử dụng $\LaTeX$. Nói khái quát lại thì nó có những ưu điểm và nhược điểm sau:

::: details Ưu điểm
- Là công cụ rất mạnh mẽ trong việc viết các tài liệu khoa học. Nó cung cấp rất nhiều công thức toán học rất đẹp.
- Dễ dàng format cho tài liệu bằng các **câu lệnh** (command).
:::

::: details Nhược điểm
- Rất khó học, và càng khó hơn để trở nên thành thạo. Vì thế, nếu bạn không có nhiều thời gian, bạn không nên học và sử dụng $\LaTeX$.
- Không phù hợp với những tài liệu cần hình thức đẹp mắt, bởi $\LaTeX$ không hướng đến sự màu mè trong thiết kế.
:::

## Off-topic: Một số nguồn học $\LaTeX$ đề xuất
::: warning
Off-topic, ý kiến cá nhân
:::

Nếu như bạn có dự định học và sử dụng $\LaTeX$, mình có thể gợi ý cho các bạn một số nguồn học $\LaTeX$ mà theo cá nhân mình là thấy oke và dễ hiểu.

### Overleaf documentation
- Link: https://www.overleaf.com/learn
- Nói sơ chút, Overleaf là một trình soạn thảo $\LaTeX$, sẽ phù hợp với các bạn nào không muốn tải TeXStudio về mà vẫn muốn sử dụng $\LaTeX$. Overleaf cung cấp hầu như tất cả các package của $\LaTeX$, bạn không cần phải download nó về như xài TeXStudio mà chỉ cần một dòng lệnh `\usepackage` để gọi nó.
- Documentation của Overleaf viết rất chi tiết từ những cái cơ bản cho đến những điều chuyên sâu của $\LaTeX$. Ngoài ra, sau mỗi kiến thức quan trọng thì sẽ có một editor mẫu cho bạn để trực tiếp thử nghiệm. Đây chắc chắn là nguồn học $\LaTeX$ vô cùng hữu ích cho bạn.

### LaTeX: Note for professionals
- Đây là cuốn sách trong bộ "Note for Professionals" do GoalKicker phát hành. Tuy không được chi tiết bằng Overleaf documentation nhưng vẫn là một nguồn học $\LaTeX$ đáng để dùng.
- Link sách: [Google Drive](https://drive.google.com/file/d/1wxo99mcrjd8QM3Aln05wmnCSpT-04gGH/view?usp=sharing)

### Các video trên YouTube
- Các video hướng dẫn trên YouTube có một ưu điểm chung là dễ hiểu hơn rất nhiều so với đọc documentation đơn thuần, bởi người nói trong video sẽ trực tiếp thực hiện cùng với những gì anh ta nói, vì thế bạn chỉ cần nhìn họ làm gì rồi bạn làm theo và thử qua 2 - 3 lần, bạn sẽ thuần thục với nó.
- Trên YouTube có rất nhiều video full-course về $\LaTeX$, bạn có thể search "LaTeX full-course" trên YouTube và tìm video nào phù hợp với bạn nhất.

## Nội dung chính

::: tip Notice
Trong bài viết này, mình sẽ giả sử rằng bạn đã sử dụng tương đối thuần thục $\LaTeX$ (có khả năng tự tạo ra các tài liệu đơn giản bằng $\LaTeX$).
:::

###