<script lang="ts">
  import SectionTitle from "$lib/components/items/section-title.svelte";
  import WorkItem from "$lib/components/items/work-item.svelte";
  import { Button } from "$lib/components/ui/button";
  import type { Media } from "$lib/types";
  import { ArrowRight, Loader2 } from "lucide-svelte";

  interface Props {
    media: Promise<Media[]>;
  }

  let { media }: Props = $props();
</script>

<section class="flex flex-col justify-center items-center gap-2 md:gap-8">
  <SectionTitle title={"our work"} />

  {#await media}
    <section class="flex items-center justify-center flex-col gap-4 h-64">
      <Loader2 class=" size-8 animate-spin" />
    </section>
  {:then media}
    <div
      class="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto px-2 max-w-6xl"
    >
      {#each media as media}
        <WorkItem {media} />
      {/each}
      <div
        class="md:aspect-square py-4 flex justify-center items-center sm:col-span-2 md:col-span-1 md:border md:w-full h-fit"
      >
        <Button variant={"link"} size={"default"} href={"/gallery"}>
          see more
          <ArrowRight class="ms-2 size-6" />
        </Button>
      </div>
    </div>
  {:catch error}
    <p>error occured : {error?.message}</p>
  {/await}
</section>
