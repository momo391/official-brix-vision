<script lang="ts">
  import SectionTitle from "$lib/components/items/section-title.svelte";
  import ServiceItem from "$lib/components/items/service-item.svelte";
  import type { Service } from "$lib/types/index.js";
  import { Loader2 } from "lucide-svelte";

  let { data } = $props();
  const { services }: { services: Service[] } = $derived(data);
</script>

<main
  class="flex flex-col justify-center items-center gap-2 md:gap-8 py-16 md:px-8"
>
  <SectionTitle title={"our services"} />
  <div
    class="px-1 md:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto max-w-6xl"
  >
    {#await data.services}
      <div class="h-svh flex items-center justify-center">
        <Loader2 class="animate-spin size-6" />
      </div>
    {:then services}
      {#each services as service}
        <ServiceItem {service} />
      {/each}
    {:catch error}
      <p>error loading comments: {error.message}</p>
    {/await}
  </div>
</main>
