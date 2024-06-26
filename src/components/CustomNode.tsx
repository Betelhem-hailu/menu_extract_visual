import React from 'react';
import { NodeProps } from 'reactflow';
 
type NodeData = {
  value: number;
};
 
 
export default function MyCustomNode({ data }: NodeProps<NodeData>) {
  return <div>A big number: {data.value}</div>;
}