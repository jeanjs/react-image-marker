import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import './image-marker.scss';
import { imageMarkerContainer, imageMarkerDefault, imageMarkerInnerContainer, imageMarkerSrc, imageMarkerText } from './imageMarker-styles';
import { calculateMarkerPosition } from './utils';

const DEFAULT_BUFFER = 12;

export type Marker = {
    top: Number;
    left: Number;
};
export type MarkerComponentProps = {
    top: Number;
    left: Number;
    itemNumber: Number;
};

type Props = {
    src: string;
    markers: Array<Marker>;
    onAddMarker?: (marker: Marker) => void;
    markerComponent?: React.FC<MarkerComponentProps>;
    bufferLeft?: number;
    bufferTop?: number;
    alt?: string;
    extraClass?: string;
};
const ImageMarker: React.FC<Props> = ({
    src,
    markers,
    onAddMarker,
    markerComponent: MarkerComponent,
    bufferLeft = DEFAULT_BUFFER,
    bufferTop = DEFAULT_BUFFER,
    alt = 'Markers',
    extraClass = '',
}: Props) => {
    const imageRef = React.useRef<Image>(null);
    const handleImageClick = (event) => {
        console.log(event);

        return

        if (!imageRef.current || !onAddMarker) {
            return;
        }
        // const imageDimentions = imageRef.current.getBoundingClientRect();

        // const [top, left] = calculateMarkerPosition(
        //     event,
        //     imageDimentions,
        //     window.scrollY,
        //     bufferLeft,
        //     bufferTop
        // );

        // onAddMarker({
        //     top,
        //     left,
        // });
    };

    const getItemPosition = (marker: Marker) => {
        return {
            top: `${marker.top}%`,
            left: `${marker.left}%`,
        };
    };

    return (
        <View style={imageMarkerContainer}>
        <TouchableOpacity onPress={handleImageClick}>
          <Image
            source={{ uri: src }}
            style={imageMarkerSrc}
            ref={imageRef}
          />
        </TouchableOpacity>
        {markers.map((marker, itemNumber) => (
          <View
            key={itemNumber}
            style={{
              ...(imageMarkerInnerContainer as Record<string, unknown>),
              ...(imageMarkerDefault as Record<string, unknown>),
              ...getItemPosition(marker),
            }}
          >
            {MarkerComponent ? (
              <MarkerComponent {...marker} itemNumber={itemNumber} />
            ) : (
              <Text style={imageMarkerText}>{itemNumber} + 1</Text>
            )}
          </View>
        ))}
      </View>
    );
};

export default ImageMarker;
