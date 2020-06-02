import { h } from 'preact';
import style from './style';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';

const Images = () => (
	<div class={style.images}>
		<h1>Images</h1>
		<p>The following images were rendered using cloudinary-react components.</p>
    <CloudinaryContext cloudName="doh779wfs">
      <div class={style.image}>
        <h4>No Transformation</h4>
        <p>Image was located on root path, publicId: tortoiseshell_cat</p>
        <Image publicId="tortoiseshell_cat">
        </Image>
      </div>
      <div class={style.image}>
        <h4>No Transformation, image not located on the root path</h4>
        <p>Image was located on 'research-purpose' folder, publicId: research-purpose/tortoiseshell_cat</p>
        <Image publicId="research-purpose/tortoiseshell_cat">
        </Image>
      </div>
      <div class={style.image}>
        <h4>Transformed, image located on the root path</h4>
        <p>Image was located on root path, publicId: tortoiseshell_cat</p>
        <Image publicId="research-purpose/tortoiseshell_cat">
          <Transformation effect="sepia" />
        </Image>
      </div>
    </CloudinaryContext>
	</div>
);

export default Images;
