<template>
  <a :href="href">
    <div class="card">
      <div class="flex">
        <div class="details">
          <h2 class="title">{{ title }}</h2>
          <div class="author">
            <div>
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
  border-radius: 8pt;
  /* border-style: dotted;
  border-color: white;*/
  border-width: 1px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  width: 100%;
  transition: all .1s ease-in-out;
  --c: #4362ee;
  --b: 3px;  
  --g: 5px;   
  
}

.card:hover {
  box-shadow: 0 5px 65px 0px #4362ee;
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
  font-size: 20px;
}

.name {
  margin: 0 0;
  font-size: 0.7rem;
  color: #999;
}

.date {
  color: #999;
}
</style>