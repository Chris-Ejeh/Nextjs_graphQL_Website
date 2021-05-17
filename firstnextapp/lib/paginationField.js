import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyargs: false, // tells apollo we will take care of everything
    read(existing = [], { args, cache }) {
      const { skip, first } = args;

      // Read the number of items on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // Check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);
      // IF
      // There are items
      // And there are enough items to satisfy how many were requested
      // And we are on the last page
      // The Just send It

      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        // We don't have any items, we must go to the netwiork to fetch them
        return false;
      }

      // If there're items, just return them from the cache, and we don't need to go to the network
      if (items.length) {
        // console.log(
        //   `There are ${items.length} items in the cache! Gonna send them to apollo `
        // );
        return items;
      }

      return false; // fallback to network
      // First thing it does is asks the read function for those items
      // We can either do one of two things:
      // First things we can do is return the items because they are already in the cache
      // The other thing we can do is to return false here, (network request)
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // this runs when the apollo client comes back from the network with our product
      // console.log(`Merging items from the network ${incoming.length}`);
      const merged = existing ? existing.slice(0) : [];
      for (let i = 0; i < skip + incoming.length; i++) {
        merged[i] = incoming[i - skip];
      }
      // console.log(merged);
      // Finally we return the merge items from the cache,
      return merged;
    },
  };
}
