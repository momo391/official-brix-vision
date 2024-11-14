<script lang="ts">
  import SectionTitle from "$lib/components/items/section-title.svelte";
  import WorkItem from "$lib/components/items/work-item.svelte";
  import { Button } from "$lib/components/ui/button";
  import { ArrowRight } from "lucide-svelte";
</script>

<section class="flex flex-col justify-center items-center gap-2 md:gap-8">
  <SectionTitle title={"our work"} />
  <div
    class="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto px-2 max-w-6xl"
  >
    <WorkItem />
    <WorkItem />
    <div
      class="md:aspect-square py-4 flex justify-center items-center sm:col-span-2 md:col-span-1 md:border md:w-full h-fit"
    >
      <Button variant={"link"} size={"default"}>
        see more
        <ArrowRight class="ms-2 size-6" />
      </Button>
    </div>
  </div>
</section>
