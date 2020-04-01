<template>
  <div class="btn-group btn-group-toggle btnGrpToggle">
    <label
      v-for="(optionName, optionValue) in options"
      :key="optionValue"
      class="btn btn-outline-dark"
      :class="{active: value == optionValue}"
    >
      <input
        type="radio"
        :name="name"
        :value="optionValue"
        :checked="value == optionValue"
        @change="$emit('input', $event.target.value)"
      />
      {{ optionName }}
    </label>
  </div>
</template>

<script>
export default {
    name: "RadioGroup",
    props: ['name', 'value', 'options']
}
</script>