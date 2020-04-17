# -*- coding: utf-8 -*-
"""
Created on Thu Apr  9 22:40:40 2020

@author: 92938
"""

##import sys
#from pdfminer.pdfparser import PDFParser
#from pdfminer.pdfdocument import PDFDocument
#from pdfminer.pdftypes import resolve1
##os.popen(r'"C:/Program Files (x86)/Adobe/Reader 11.0/Reader/AcroRd32.exe" abc.pdf')
##filename = sys.argv[1]
#fp = open("abc5.pdf", 'rb')
#
#parser = PDFParser(fp)
#doc = PDFDocument(parser)
#fields = resolve1(doc.catalog['AcroForm'])['Fields']
#for i in fields:
#    field = resolve1(i)
#    name, value = field.get('T'), field.get('V')
#    print ('{0}: {1}'.format(name, value))


#import PyPDF2
#f = PyPDF2.PdfFileReader('abc3.pdf')
#ff = f.getFields()
#print(ff)

from pymongo import MongoClient

from pdfminer.pdfparser import PDFParser
from pdfminer.pdfdocument import PDFDocument
from pdfminer.pdftypes import resolve1
import sys, json
from PyPDF2 import PdfFileWriter, PdfFileReader
from PyPDF2.generic import BooleanObject, NameObject, IndirectObject
class web:
    def read_in(self):
        lines = sys.stdin.readlines()
        #Since our input would only be having one line, parse our JSON data from that
        return json.loads(lines[0])
    
    def readinpara(self):
        #get our data as an array from read_in()
        lines = self.read_in()
        return lines
    
        #return the sum to the output stream
        
class allcamps:


    def __init__(self,firstname,page):
        self.firstname = firstname
        self.page = page 

    def start_server(self):
        client = MongoClient("mongodb+srv://Xinni:123@test-j20kt.mongodb.net/test?retryWrites=true&w=majority")
        #os.popen(r'"C:/Program Files (x86)/Adobe/Reader 11.0/Reader/AcroRd32.exe" abc.pdf')
        #filename = sys.argv[1]
        db = client.all_camps
        # print(db)
        #print(db.list_collection_names())
        collection = db.exercises
        #print(collection.name)
        x = collection.find_one({'firstname':self.firstname})
        return x
        #pprint(x)
#        print(x['firstname'])


    def set_need_appearances_writer(self,writer: PdfFileWriter):
        # See 12.7.2 and 7.7.2 for more information: http://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/PDF32000_2008.pdf
        try:
            catalog = writer._root_object
            # get the AcroForm tree
            if "/AcroForm" not in catalog:
                writer._root_object.update({
                    NameObject("/AcroForm"): IndirectObject(len(writer._objects), 0, writer)
                })
    
            need_appearances = NameObject("/NeedAppearances")
            writer._root_object["/AcroForm"][need_appearances] = BooleanObject(True)
            # del writer._root_object["/AcroForm"]['NeedAppearances']
            return writer
    
        except Exception as e:
            print('set_need_appearances_writer() catch : ', repr(e))
            return writer

    def dic(self):
        a = {}
        a["b'Text36'"] = "parent1's name"
        a["b'Text37'"] = "parent1's birthdate"
        a["b'Text38'"] = "parent1's relationship"
        a["b'Text39'"] = "parent1's home phone"
        a["b'Text40'"] = "parent1's Job Title"
        a["b'Text41'"] = "parent1's Mobile Phone"
        a["b'Text42'"] = "parent1's Company"
        a["b'Text43'"] = "parent1's Work Phone"
        a["b'Text44'"] = "parent1's E-mail Address"
        a["b'Text45'"] = "parent1's homeaddress"
        a["b'Text46'"] = "parent2's name"
        a["b'Text47'"] = "parent2's birthdate"
        a["b'Text48'"] = "parent2's relationship"
        a["b'Text49'"] = "parent2's home phone"
        a["b'Text50'"] = "parent2's Job Title"
        a["b'Text51'"] = "parent2's Mobile Phone"
        a["b'Text52'"] = "parent2's Company"
        a["b'Text53'"] = "parent2's Work Phone"
        a["b'Text54'"] = "parent2's E-mail Address"
        a["b'Text55'"] = "parent2's homeaddress"
        a["b'Text10'"] = "today date"
        a["b'Text11'"] = "child firstname"
        a["b'Text13'"] = "child lastname" 
        a["b'Text14'"] = "child birthdate"
        a["b'Text15'"] = "gender"
        a["b'Text16'"] = "homeaddress"
        a["b'Text56'"] = "contact 1 name"
        a["b'Text57'"] = "contact 1 address"
        a["b'Text59'"] = "contact 1 home phone"
        a["b'Text60'"] = "contact 1 mobile phone"
        a["b'Text61'"] = "contact 1 work Phone"
        a["b'Text62'"] = "contact 2 name"
        a["b'Text63'"] = "contact 2 home phone"
        a["b'Text64'"] = "contact 2 address"
        a["b'Text66'"] = "contact 2 mobile phone"
        a["b'Text67'"] = "contact 2 work Phone"
        a["b'Text68'"] = "doctor name"
        a["b'Text69'"] = "doctor phone number"
        return a
    
    def pdffill(self):
        x = self.start_server()
        mapping = self.dic()
        
        writer = PdfFileWriter()
        self.set_need_appearances_writer(writer)
        print(1)
        fp = open("C:/Users/92938/mern-exercise-tracker/backend/routes/abc3.pdf", 'rb')
#        pdf_writer = PyPDF2.PdfFileWriter()
        parser = PDFParser(fp)
        doc = PDFDocument(parser)
        fields = resolve1(doc.catalog['AcroForm'])['Fields']
        myfile = PdfFileReader("C:/Users/92938/mern-exercise-tracker/backend/routes/abc3.pdf")
        first_page = myfile.getPage(self.page)
#for i in fields:
#    field = resolve1(i)
#    name, value = field.get('T'), field.get('V')
##    print (str(name))
#    if str(name) == "b'Text11'":
#        writer.updatePageFormFieldValues(first_page, fields={'Text11':x['firstname']})
#    if str(name) == "b'Text13'":
#        writer.updatePageFormFieldValues(first_page, fields={'Text13':x['lastname']})
#    if str(name) == "b'Text16'":
#        writer.updatePageFormFieldValues(first_page, fields={'Text16':x['homeaddress']})
#    if str(name) == "b'Text15'":
#        writer.updatePageFormFieldValues(first_page, fields={'Text15':x['gender']})
#    if str(name) == "b'Text14'":
#        writer.updatePageFormFieldValues(first_page, fields={'Text14':str(x['birthdate'])[:10]})
        for p in x.keys():
        
            for i in fields:
                field = resolve1(i)
                name, value = field.get('T'), field.get('V')        
                if str(name) in mapping.keys() and p in mapping[str(name)]:
        
                    if p == "birthdate":
                        writer.updatePageFormFieldValues(first_page, fields={str(name)[2:len(str(name))-1]:str(x[p])[:10]})
                    else:
                        writer.updatePageFormFieldValues(first_page, fields={str(name)[2:len(str(name))-1]:str(x[p])})
        #    print ('{0}: {1}'.format(name, value))
        writer.addPage(first_page)
        with open("newfile.pdf","wb") as new:
            writer.write(new)
if __name__ == "__main__":  
    w = web()
    webreadin = w.readinpara()
    f = allcamps(webreadin['firstname'],6)
    
    f.pdffill()