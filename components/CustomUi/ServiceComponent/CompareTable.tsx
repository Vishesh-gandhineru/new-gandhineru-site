import { LogoBlack } from "@/components/CustomIcons";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Dot } from "lucide-react";

export default function CompareTable() {
  const TableData = [
    {
      feature: "Experience seamless synergy with our",
   
    },
    {
      feature: "Experience seamless synergy with our",

    },
    {
      feature: "Experience seamless synergy with our",

    },
    {
      feature: "Experience seamless synergy with our",

    },
  ];

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-primary">
              <h4>Features</h4>
            </TableHead>
            <TableHead className="px-4 py-3 text-primary text-center text-nowrap">
              <h4>Other Companies</h4>
            </TableHead>
            <TableHead className="px-4 py-3 text-primary text-center text-nowrap">
              <h4>Freelancers</h4>
            </TableHead>
            <TableHead className="px-4 py-3 text-primary text-center flex justify-center text-nowrap">
              <LogoBlack className="h-[40px] w-[130px]" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          { TableData.map((data, index) => {
            return(
            <TableRow key={index}>
              <TableCell className="text-primary text-base text-nowrap">
              {data.feature}
              </TableCell>
              <TableCell className="px-4 py-3">
                <div className="flex justify-center">
                  <Dot className="text-[#D9D9D9] w-14 h-14" />
                </div>
              </TableCell>
              <TableCell className="px-4 py-3">
                <div className="flex justify-center">
                  <Dot className="text-[#D9D9D9] w-14 h-14" />
                </div>
              </TableCell>
              <TableCell className="px-4 py-3">
                <div className="flex justify-center">
                  <Dot className=" text-primary w-14 h-14" />
                </div>
              </TableCell>
            </TableRow>

            )
          })}

        </TableBody>
      </Table>
    </div>
  );
}
