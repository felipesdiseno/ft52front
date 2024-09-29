'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const meses = [
  {
    value: 'Enero',
    label: 'Enero',
  },
  {
    value: 'Febrero',
    label: 'Febrero',
  },
  {
    value: 'Marzo',
    label: 'Marzo',
  },
  {
    value: 'Abril',
    label: 'Abril',
  },
  {
    value: 'Mayo',
    label: 'Mayo',
  },
  {
    value: 'Junio',
    label: 'Junio',
  },
  {
    value: 'Julio',
    label: 'Julio',
  },
  {
    value: 'Agosto',
    label: 'Agosto',
  },
  {
    value: 'Septiembre',
    label: 'Septiembre',
  },
  {
    value: 'Octubre',
    label: 'Octubre',
  },
  {
    value: 'Noviembre',
    label: 'Noviembre',
  },
  {
    value: 'Diciembre',
    label: 'Diciembre',
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? meses.find((framework) => framework.value === value)?.label
            : 'Filtrar por mes...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>Mes no encontrado.</CommandEmpty>
            <CommandGroup>
              {meses.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === framework.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
