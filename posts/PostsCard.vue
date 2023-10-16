<template>
  <a :href="href">
    <div class="card">
      <div class="flex">
        <div class="media">
          <img :src="image" :alt="title" />
        </div>
        <div class="details">
          <h2 class="title">{{ title }}</h2>
          <p class="excerpt">{{ truncateText(excerpt, 50) }}</p>
          <div class="author">
            <div>
              <h3 class="name">{{ author }}</h3>
              <p class="date">{{ date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
  methods: {
    truncateText(text, length) {
      if (text.length > length) {
        return text.substring(0, length) + "...";
      }
      return text;
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 0rem;
  border-style: dotted;
  border-color: grey;
  border-width: 1px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  width: 125%;
  transition: all .2s ease-in-out;
  --c: #667eea;
  --b: 3px;  
  --g: 5px;   
  
  padding: calc(var(--g) + var(--b));
  --_g: #0000 25%,var(--c) 0;
   background: 
    conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g))
     var(--_i,200%) 0  /200% var(--_i,var(--b))  no-repeat,
    conic-gradient(            at bottom var(--b) left  var(--b),var(--_g))
     0   var(--_i,200%)/var(--_i,var(--b)) 200%  no-repeat;
  transition: .3s, background-position .3s .3s;
  cursor: pointer; 
}

.card:hover {
  --_i: 100%;
  transition: .3s, background-size .3s .3s;
  
}

.flex {
  display: flex;
}

.media {
  width: 45%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.details {
  margin-left: 1.2rem;
}

.title {
  border-top: none;
  margin: 0 0;
}

.name {
  margin: 0 0;
  font-size: 0.7rem;
  color: #999;
}
</style>