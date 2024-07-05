// server/api/import-json.js

import { PrismaClient } from '@prisma/client';
import fetch from 'node-fetch';

const prisma = new PrismaClient();

async function main() {
  try {
    const response = await fetch('https://stats.moe.gov.tw/files/detail/112/112_sdata.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();

    for (const item of data) {
      await prisma.schoolData.create({
        data: {
          schoolYear: parseInt(item["學年度"]),
          schoolCode: item["學校代碼"],
          schoolName: item["學校名稱"],
          departmentCode: item["科系代碼"],
          departmentName: item["科系名稱"],
          dayOrNight: item["日間∕進修別"], // 注意此處的屬性名稱
          level: item["等級別"],
          studentCount: parseInt(item["學生數"]),
          teacherCount: parseInt(item["教師數"]),
          lastYearGraduateCount: parseInt(item["上學年度畢業生數"]),
          city: item["縣市名稱"], // 注意此處的屬性名稱
          system: item["體系別"],
        },
      });
    }

    console.log('Data imported successfully');
  } catch (error) {
    console.error('Error importing data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
