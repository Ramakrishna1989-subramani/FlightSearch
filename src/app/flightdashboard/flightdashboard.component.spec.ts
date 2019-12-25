import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { FlightDashboardComponent } from './flightdashboard.component'
// import { LayoutModule } from '../../layout.module'

describe('FlightDashboardComponent', () => {
  let component: FlightDashboardComponent
  let fixture: ComponentFixture<FlightDashboardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDashboardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
