<template>
  <div class="col-lg-4 col-md-4 col-xs-12">
    <div class="quote">
      <div class="quote-text">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text']
};
</script>

<style>
.quote {
  padding: 15px 20px;
  font-family: Arizonia;
  font-style: italic;
  font-size: 30px;
  color: rgba(000, 000, 000, 0.2);
  border: 1px solid;
  border-color:  rgba(000, 000, 000, 0.2);
  border-radius: 4px;
  margin-bottom: 20px;
  transition: .3s ease;
  transition-property: color, border-color;
  cursor: pointer;
  word-wrap: break-word;
	overflow-wrap: break-word;
}
.quote:hover {
  color: #000;
  border-color:  rgba(000, 000, 000, 0.3);
}
</style>
