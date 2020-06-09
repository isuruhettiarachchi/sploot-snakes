import React from 'react';
import { useSelector } from 'react-redux';
import { selectCoords } from '../../redux/slices/clientSlice';

export default function ResultsTable(){

    const position = useSelector(selectCoords);
    return <p>{position}</p>
}