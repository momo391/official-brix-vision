<script lang="ts">
  import type { Media } from "$lib/types";

  interface Props {
    media: Media;
  }
  let { media }: Props = $props();
</script>

<img
  src={media.mediaUrl}
  alt="about us"
  class="w-full h-fit aspect-square object-cover"
/>
