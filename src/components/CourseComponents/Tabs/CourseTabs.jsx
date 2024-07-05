import React from 'react'
import ClassRoom from '../ClassRoom/ClassRoom'
import Assignment from '../Assignment/Assignment'
import ModulesTable from '../ModulesTable/ModulesTable'
import Modules from '../Modules/Modules'
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
const CourseTabs = () => {
  return (
    <>
            <Tabs aria-label="Options" color="primary" variant="underlined">
        <Tab key="class" title="Class">
          <Card>
            <CardBody>
              <ClassRoom/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="assignment" title="Assignment">
          <Card>
            <CardBody>
              <Assignment/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="modules" title="Modules">
          <Card>
            <CardBody>
              <ModulesTable />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="course" title="Course">
          <Card>
            <Modules />
          </Card>
        </Tab>
        <Tab key="lessons" title="Lessons">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="group" title="Group">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>

        <Tab key="add2" title="add2">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </>
  )
}

export default CourseTabs
