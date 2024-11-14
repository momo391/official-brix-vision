<script lang="ts">
  import SectionTitle from "$lib/components/items/section-title.svelte";
  import type { Media } from "$lib/types";
  import { Loader2 } from "lucide-svelte";

  interface Props {
    data: {
      medias: Promise<Media[]>;
    };
  }

  let { data }: Props = $props();
</script>

<main class="flex items-center justify-start py-8 flex-col gap-4">
  <SectionTitle title={"gallery"} />

  {#await data.medias}
    <div class="flex justify-center items-center h-96">
      <Loader2 class="animate-spin size-6" />
    </div>
  {:then medias}
    {#if medias.length === 0}
      <div class="flex justify-center items-center h-96">
        <p>no media found</p>
      </div>
    {:else}
      <div
        class="w-screen max-w-7xl columns-2 px-2 sm:columns-3 xl:columns-4 mx-auto gap-2"
      >
        {#each [...medias] as media}
          <img
            src={media.mediaUrl}
            alt={media.title}
            class="w-full h-fit object-cover mb-2 rounded"
          />
        {/each}
      </div>
    {/if}
  {:catch error}
    <div class="flex justify-center items-center h-96">
      <p>no media found: {error?.message}</p>
    </div>
  {/await}
</main>
