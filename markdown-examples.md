# Markdown Extension Examples

Xin chào mọi người! Đây là theme mới của blog mình.

Hiện tại thì mọi thứ vẫn đang trong quá trình thi công nên còn thiếu khá nhiều, nhất là MathJax để gõ toán. Mình sẽ ưu tiên cài đặt cái này trước tiên, phần còn lại thì sau 1 - 2 tuần nữa mình sẽ hoàn thiện toàn bộ.

Một số câu lệnh kiểm tra cú pháp markdown

## Kiểm tra cú pháp markdown

### Heading

```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
```

### Bold text - Italic text

**Input**

*Output*

***Bold Italic***

### Blockquote

> Blockquote, blockquote, blockquote

### Ordered List

1. First Item
2. Second Item
3. Third Item

### Unordered List

- First Item
- Second Item
- Third Item

### Code
`meowmeow`

### Horizontal Rule

----------------------------------------------

### Link

[Youtube](https://youtube.com)

### Image

![](https://th.bing.com/th/id/OIG.CO2sHWK_IEYIwzXsC2hX)

### Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
