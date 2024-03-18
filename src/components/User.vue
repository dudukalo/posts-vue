<script setup>
  import Icon from './Icon.vue';
  import IconUser from './icons/IconUser.vue';
  
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    id: {
      type: [Number, String],
      required: true,
    }
  });
</script>

<template>
  <div class='user'>
      <Icon
        class='icon'
        width='60' 
        height="60" 
        viewBox='0 0 24 24'
        iconColor='#6d6d6d'
        aria-labelledby='Пользователь'
      >
        <IconUser />
      </Icon>
      <div class='info'>
        <strong>
          Автор
        </strong>
        <a
          href="#"
          class='name-link'
          rel="author"
        >
          {{ name }}
        </a>
        <span class='user-id'>ID: {{ id }}</span>
      </div>
    </div>
</template>

<style scoped>
  .user {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: white;
    padding: 15px;
    height: 100%;
    border-radius: 5px;
  }

  .icon {
    width: 60px;
    /* fill: black; */
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .name-link {
    color: var(--accent-color);
    cursor: pointer;
    transition: color 0.3s;
    outline: none;
  }

  .name-link:hover {
    text-decoration: underline;
  }

  .name-link:focus-visible {
    outline: 1px solid var(--accent-color);
    outline-offset: 2px;
  }

  .user-id {
    font-size: 14px;
    color: var(--desc-color);
  }
</style>