<script lang="ts">
  interface Props {
    title: string;
  }
  let { title }: Props = $props();
</script>

<p
  class="flex justify-center items-center font-mono text-4xl capitalize w-full"
>
  {title}
</p>
