<script setup>
  const emit = defineEmits(['navigate']);

  const props = defineProps({
      pagesCount: {
        type: Number,
        default: 1
      },
  });
  
</script>

<template>
  <div class="pagination">
    <button
      class='btn'
      v-for='index in pagesCount'
      @click='emit("navigate", index)'
    >
      {{ index }}
    </button>
  </div>
</template>

<style>
  .pagination {
    display: flex;
    gap: 5px;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--accent-color);
    padding: 8px 10px;
    width: 52px;
    height: 52px;
    color: var(--accent-color);
    border-radius: 50%;
    cursor: pointer;
    background-color: transparent;
    transition: box-shadow 0.3s, transform 0.3s, color 0.3s, background-color 0.3s;
    outline: none;
  }

  .btn:hover {
    transform: translateY(-1px);
    box-shadow: 0px 7px 15px -3px var(--accent-color);
  }

  .btn:active {
    transform: translateY(2px) scale(0.98);
    box-shadow: none;
    background-color: var(--accent-color);
    color: white;
  }

  .btn:focus-visible {
    outline: 1px solid var(--accent-color);
    outline-offset: 2px;
  }
</style>