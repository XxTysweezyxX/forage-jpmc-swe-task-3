// src/perspective.d.ts

import { Table } from '@finos/perspective';

interface Window {
  perspective: {
    worker: () => {
      table: (schema: any) => Table;
    };
  };
}
