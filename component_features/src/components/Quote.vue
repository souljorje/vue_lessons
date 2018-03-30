<template>
  <blockquote>
    <div class="title">
       <slot name="title"></slot>
       <span style="font-weight: 100; font-family: Segoe UI;">
         <slot name="subtitle" >The subtitle</slot>
       </span>
    </div>
    <hr>
    <div>
       <slot></slot>
    </div>
  </blockquote>
</template>

<script>
export default {
};
</script>

<style>
blockquote {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px rgba(000, 000, 000, 0.2);
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
.title {
  font-style: italic;
}
</style>

