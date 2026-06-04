import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export function useQueryParams(key: string, defaultValue = "") {
  const route = useRoute();
  const router = useRouter();

  return computed<string>({
    get: () => {
      const value = route.query[key];

      if (Array.isArray(value)) {
        return value[0] ?? defaultValue;
      }

      return (value as string) ?? defaultValue;
    },
    set: (newValue: string) => {
      router.replace({
        query: {
          ...route.query,
          [key]: newValue || undefined,
        },
      });
    },
  });
}
