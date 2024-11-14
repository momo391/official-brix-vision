<script>
  import SectionTitle from "$lib/components/items/section-title.svelte";
  import ServiceItem from "$lib/components/items/service-item.svelte";
  import { Button } from "$lib/components/ui/button";
  import { ArrowUpRight } from "lucide-svelte";
</script>

<section class="flex flex-col justify-center items-center gap-2 md:gap-8">
  <SectionTitle title={"our services"} />
  <div class="flex sm:flex-row flex-col gap-8 mx-auto max-w-6xl">
    <!-- <ServiceItem /> -->
    <!-- <ServiceItem /> -->
    <!-- <ServiceItem /> -->
  </div>
  <div class="flex justify-center items-center">
    <Button>
      Read more
      <ArrowUpRight class="ms-2 size-6" />
    </Button>
  </div>
</section>
