<script lang="ts">
  import SectionTitle from "$lib/components/items/section-title.svelte";
  import ServiceItem from "$lib/components/items/service-item.svelte";
  import type { Service } from "$lib/types/index.js";
  import { Loader2 } from "lucide-svelte";

  interface Props {
    data: {
      services: Promise<Service[]>;
    };
  }
  let { data }: Props = $props();
</script>

<main class="flex items-center justify-start py-8 flex-col gap-4">
  <SectionTitle title={"our services"} />

  {#await data.services}
    <div class="flex justify-center items-center h-96">
      <Loader2 class="animate-spin size-6" />
    </div>
  {:then services}
    <div
      class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2 max-w-6xl gap-2"
    >
      {#each services as service}
        <ServiceItem {service} />
      {/each}
    </div>
  {:catch error}
    <p>error occured : {error?.message}</p>
  {/await}
</main>
