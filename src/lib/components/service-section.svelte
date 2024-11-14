<script lang="ts">
  import SectionTitle from "$lib/components/items/section-title.svelte";
  import ServiceItem from "$lib/components/items/service-item.svelte";
  import { Button } from "$lib/components/ui/button";
  import type { Service } from "$lib/types";
  import { ArrowUpRight, Loader2 } from "lucide-svelte";

  interface Props {
    services: Promise<Service[]>;
  }

  let { services }: Props = $props();
</script>

<main class="flex items-center justify-start flex-col gap-4">
  <SectionTitle title={"our services"} />

  {#await services}
    <section class="flex items-center justify-center flex-col gap-4 h-64">
      <Loader2 class=" size-8 animate-spin" />
    </section>
  {:then services}
    <div
      class="w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto px-2 max-w-6xl gap-2"
    >
      {#each services as service}
        <ServiceItem {service} />
      {/each}
    </div>
  {:catch error}
    <p>error occured : {error?.message}</p>
  {/await}
  <div class="flex justify-center items-center">
    <Button href={"/services"}>
      Read more
      <ArrowUpRight class="ms-2 size-6" />
    </Button>
  </div>
</main>
