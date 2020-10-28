import React from "react";
import { Grid } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';


interface GridSkeletonLoader {
  totalCol: number,
  colHeight?: number | string,
  gridSize?: boolean | 4 | "auto" | 1 | 2 | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined // 1 to 12
}

const GridSkeletonLoader = (props: GridSkeletonLoader) => {
  const { totalCol, colHeight=72, gridSize=12 } = props;
  return (
    <>
      {Array.from(Array(totalCol)).map((i)=>{
        return (
          <Grid key={`GridSkeleton_${i}`} item xs={gridSize}>
            <Skeleton height={colHeight} variant="rect" animation="wave" />
        </Grid>
        )
      })}
    </>
  )
}

export default GridSkeletonLoader;