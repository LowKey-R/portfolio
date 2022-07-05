<script>
  export let showOnPx = 150;
  let hidden = true;

  function goTop() {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top" on:click={goTop} class:hidden>Back to Top &#8593;</div>

<style>
  .back-to-top {
    opacity: 1;
    transition: opacity 0.5s, visibility 0.5s;
    position: fixed;
    z-index: 99;
    right: 20px;
    user-select: none;
    bottom: 20px;
    color: white;
    background-color: #060606;
    cursor: pointer;

    /* visual styling */
    text-decoration: none;
    padding: 10px;
    border-radius: 100px;
    white-space: nowrap;
  }

  .back-to-top.hidden {
    opacity: 0;
    visibility: hidden;
  }
</style>
