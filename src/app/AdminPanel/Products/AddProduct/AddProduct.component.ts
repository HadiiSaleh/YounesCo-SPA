import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/Services/product.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ToastaService, ToastOptions } from 'ngx-toasta';
import { EmbryoService } from 'src/app/Services/Embryo.service';
import { Color } from '../../Interfaces/Color';
import { Category } from '../../Interfaces/Category';

@Component({
  selector: 'app-add-product',
  templateUrl: './AddProduct.component.html',
  styleUrls: ['./AddProduct.component.scss'],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  mainImgPath: string;
  colors: Color[] = [];
  categories: Category[] = [];
  filteredColors: Observable<Color[]>;

  sizeArray: number[] = [36, 38, 40, 42, 44, 46, 48];
  quantityArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public imagePath;
  fileToUpload: File[] = [];
  selectedButton: number;

  data: any = [
    {
      image: 'https://via.placeholder.com/625x800',
      image_gallery: [
        'https://via.placeholder.com/625x800',
        'https://via.placeholder.com/625x800',
        'https://via.placeholder.com/625x800',
        'https://via.placeholder.com/625x800',
        'https://via.placeholder.com/625x800',
      ],
    },
  ];

  constructor(
    public formBuilder: FormBuilder,
    private embryoService: EmbryoService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private toasterService: ToastaService
  ) {}

  ngOnInit() {
    this.mainImgPath = this.data[0].image;
    this.buildForm();
    this.categoryService.GetColorsAndCategoriesNames().subscribe(
      (data) => {
        this.colors = data.colors;
        this.categories = data.categories;
      },
      (error) => {
        console.log(error);
      }
    );
    this.filteredColors = this.productForm.get('colorName').valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value))
    );
  }

  buildForm() {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      price: ['', [Validators.required]],
      outOfStock: ['false', [Validators.required]],
      description: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      colorName: ['', [Validators.required]],
      categoryName: ['', [Validators.required]],
      features: [''],
    });
  }

  createProduct() {
    const toastOption: ToastOptions = {
      title: 'Failed to save product',
      showClose: true,
      timeout: 5000,
      theme: 'material',
    };

    if (
      this.fileToUpload === null ||
      this.fileToUpload === undefined ||
      this.fileToUpload.length <= 0
    ) {
      toastOption.msg = 'You need to upload at least one image';
      toastOption.title = 'Failed to save product';
      this.toasterService.error(toastOption);
    } else {
      this.productService
        .createProduct(this.productForm.value, this.fileToUpload)
        .subscribe(
          () => {
            //   toastOption.title = 'Product Added Successfully';
            //   toastOption.msg = 'Product was added successfully';

            // this.toasterService.success(toastOption);
            this.embryoService
              .OkPopup(['Product Added Successfully'])
              .subscribe(() => {
                  this.productForm.reset({ outOfStock: 'false' });
                  this.uploadImages(null, 'reset');
              });
          },
          (error) => {
            toastOption.title = 'Failed to save product';
            toastOption.msg = error;
            this.toasterService.error(toastOption);
          }
        );
    }
  }

  uploadImages(files: FileList, mode: 'reset' | 'upload' = 'upload') {
    let reader;
    if (files && files.length > 0 && mode === 'upload') {
      if (this.selectedButton === 0) {
        reader = new FileReader();
        reader.onload = (event: any) => {
          this.mainImgPath = event.target.result;
        };
        reader.readAsDataURL(files[0]);
      }

      for (let index = 0; index < files.length && (this.selectedButton + index) < 5; index++) {
        const imagePosition = this.selectedButton + index;
        reader = new FileReader();
        reader.onload = (event: any) => {
          this.data[0].image_gallery[imagePosition] = event.target.result;
        };
        reader.readAsDataURL(files[index]);
        if (this.fileToUpload[imagePosition]) {
          this.fileToUpload[imagePosition] = files.item(index);
        } else {
          this.fileToUpload.push(files.item(index));
        }
      }
    }

    if (mode === 'reset') {
      reader = new FileReader();
      for (let index = 0; index < this.fileToUpload.length; index++) {
        this.data[0].image_gallery[index] = 'https://via.placeholder.com/625x800';
      }
    this.fileToUpload = [];
  }
  }

  discard() {
    this.embryoService
      .confirmationPopup(
        'Are you sure that you want to cancel the product creation?'
      )
      .subscribe((res) => {
        if (res) {
          this.productForm.reset({ outOfStock: 'false' });
        }
      });
  }

  private _filter(value: string) {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.colors.filter((option) =>
        option.colorName.toLowerCase().includes(filterValue)
      );
    }
  }

  /**
   * getImagePath is used to change the image path on click event.
   */
  public getImagePath(imgPath: string, index: number) {
    // console.log(imgPath);
    const border = document.querySelector('.border-active');

    if (border) {
      border.classList.remove('border-active');
    }
    this.mainImgPath = imgPath;
    document.getElementById(index + '_img').className += ' border-active';
  }
}
